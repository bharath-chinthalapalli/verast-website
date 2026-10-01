import { Component, ElementRef, HostListener, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaV3Module, ReCaptchaV3Service } from 'ng-recaptcha';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { VerastService } from '../../../services/verast.service';
import { ContactUs } from '../../../modals/verast';

@Component({
  selector: 'app-contact-us-page',
  imports: [CommonModule, MatIcon, ReactiveFormsModule, RouterLink, RecaptchaModule, RecaptchaFormsModule, RecaptchaV3Module, MatProgressSpinnerModule],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.scss'
})
export class ContactUsPageComponent implements OnInit {
  isLoading = signal<boolean>(false);
  countryFilter = '';
  // selectedCountry: any = '+971';
  countries: any[] = [];
  selectedCountry: any;
  captchaVerified = false;
  captchaToken: string | null = null;
  dropdownOpen = false;

  private _fb = inject(FormBuilder);
  private readonly _snackBar = inject(MatSnackBar);
  private readonly _verastService = inject(VerastService);
  private readonly _recaptchaV3Service = inject(ReCaptchaV3Service);
  
  constructor(private eRef: ElementRef) { }
  socialLink = signal<any[]>([
    {
      title: "Email Address",
      icon: "images/mail_icon.png",
      content: "sales@verast.io",
      url: "sales@verast.io",
    },
  ]);

  contactFrom: FormGroup = this._fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[\p{Letter}][\p{Letter} .'\-]*(?:[\p{Letter}])$/u)]],
    lastName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[\p{Letter}][\p{Letter} .'\-]*(?:[\p{Letter}])$/u)]],
    email: ['', [Validators.required, Validators.pattern('^(?=[a-zA-Z0-9._%+-]*[a-zA-Z])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    dialCode: ['+971', Validators.required],
    phoneNumber: ['',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(17)
      ]
    ],
    address: [''],
    city: [''],
    region: [''],
    postalCode: [''],
    country: ['United Arab Emirates'],
    message: ['', [Validators.required, Validators.maxLength(500), Validators.pattern(/^[^\s].*[^\s]$/)]],
    captcha: [''],
  });
  ngOnInit(): void {
    this.countries = [
      { name: 'Afghanistan', dialCode: '+93', code: 'AF', flag: 'images/flags/af.svg' },
      { name: 'Angola', dialCode: '+244', code: 'AO', flag: 'images/flags/ao.svg' },
      { name: 'Albania', dialCode: '+355', code: 'AL', flag: 'images/flags/al.svg' },
      { name: 'Andorra', dialCode: '+376', code: 'AD', flag: 'images/flags/ad.svg' },
      { name: 'Argentina', dialCode: '+54', code: 'AR', flag: 'images/flags/ar.svg' },
      { name: 'Australia', dialCode: '+61', code: 'AU', flag: 'images/flags/au.svg' },
      { name: 'Austria', dialCode: '+43', code: 'AT', flag: 'images/flags/at.svg' },
      { name: 'Belgium', dialCode: '+32', code: 'BE', flag: 'images/flags/be.svg' },
      { name: 'Bangladesh', dialCode: '+880', code: 'BD', flag: 'images/flags/bd.svg' },
      { name: 'Bulgaria', dialCode: '+359', code: 'BG', flag: 'images/flags/bg.svg' },
      { name: 'Bosnia and Herzegovina', dialCode: '+387', code: 'BA', flag: 'images/flags/ba.svg' },
      { name: 'Bolivia, Plurinational State of', dialCode: '+591', code: 'BO', flag: 'images/flags/bo.svg' },
      { name: 'Brazil', dialCode: '+55', code: 'BR', flag: 'images/flags/br.svg' },
      { name: 'Canada', dialCode: '+1', code: 'CA', flag: 'images/flags/ca.svg' },
      { name: 'Switzerland', dialCode: '+41', code: 'CH', flag: 'images/flags/ch.svg' },
      { name: 'Chile', dialCode: '+56', code: 'CL', flag: 'images/flags/cl.svg' },
      { name: 'China', dialCode: '+86', code: 'CN', flag: 'images/flags/cn.svg' },
      { name: 'Colombia', dialCode: '+57', code: 'CO', flag: 'images/flags/co.svg' },
      { name: 'Costa Rica', dialCode: '+506', code: 'CR', flag: 'images/flags/cr.svg' },
      { name: 'Cuba', dialCode: '+53', code: 'CU', flag: 'images/flags/cu.svg' },
      { name: 'Czechia', dialCode: '+420', code: 'CZ', flag: 'images/flags/cz.svg' },
      { name: 'Germany', dialCode: '+49', code: 'DE', flag: 'images/flags/de.svg' },
      { name: 'Denmark', dialCode: '+45', code: 'DK', flag: 'images/flags/dk.svg' },
      { name: 'Dominican Republic', dialCode: '+1', code: 'DO', flag: 'images/flags/do.svg' },
      { name: 'Algeria', dialCode: '+213', code: 'DZ', flag: 'images/flags/dz.svg' },
      { name: 'Ecuador', dialCode: '+593', code: 'EC', flag: 'images/flags/ec.svg' },
      { name: 'Egypt', dialCode: '+20', code: 'EG', flag: 'images/flags/eg.svg' },
      { name: 'Spain', dialCode: '+34', code: 'ES', flag: 'images/flags/es.svg' },
      { name: 'Ethiopia', dialCode: '+251', code: 'ET', flag: 'images/flags/et.svg' },
      { name: 'Finland', dialCode: '+358', code: 'FI', flag: 'images/flags/fi.svg' },
      { name: 'Fiji', dialCode: '+679', code: 'FJ', flag: 'images/flags/fj.svg' },
      { name: 'France', dialCode: '+33', code: 'FR', flag: 'images/flags/fr.svg' },
      { name: 'United Kingdom', dialCode: '+44', code: 'GB', flag: 'images/flags/gb.svg' },
      { name: 'Ghana', dialCode: '+233', code: 'GH', flag: 'images/flags/gh.svg' },
      { name: 'Greece', dialCode: '+30', code: 'GR', flag: 'images/flags/gr.svg' },
      { name: 'Guatemala', dialCode: '+502', code: 'GT', flag: 'images/flags/gt.svg' },
      { name: 'Honduras', dialCode: '+504', code: 'HN', flag: 'images/flags/hn.svg' },
      { name: 'Croatia', dialCode: '+385', code: 'HR', flag: 'images/flags/hr.svg' },
      { name: 'Hungary', dialCode: '+36', code: 'HU', flag: 'images/flags/hu.svg' },
      { name: 'Indonesia', dialCode: '+62', code: 'ID', flag: 'images/flags/id.svg' },
      { name: 'India', dialCode: '+91', code: 'IN', flag: 'images/flags/in.svg' },
      { name: 'Ireland', dialCode: '+353', code: 'IE', flag: 'images/flags/ie.svg' },
      { name: 'Iran, Islamic Republic of', dialCode: '+98', code: 'IR', flag: 'images/flags/ir.svg' },
      { name: 'Iraq', dialCode: '+964', code: 'IQ', flag: 'images/flags/iq.svg' },
      { name: 'Iceland', dialCode: '+354', code: 'IS', flag: 'images/flags/is.svg' },
      { name: 'Israel', dialCode: '+972', code: 'IL', flag: 'images/flags/il.svg' },
      { name: 'Italy', dialCode: '+39', code: 'IT', flag: 'images/flags/it.svg' },
      { name: 'Jordan', dialCode: '+962', code: 'JO', flag: 'images/flags/jo.svg' },
      { name: 'Japan', dialCode: '+81', code: 'JP', flag: 'images/flags/jp.svg' },
      { name: 'Kenya', dialCode: '+254', code: 'KE', flag: 'images/flags/ke.svg' },
      { name: 'Korea, Republic of', dialCode: '+82', code: 'KR', flag: 'images/flags/kr.svg' },
      { name: 'Kuwait', dialCode: '+965', code: 'KW', flag: 'images/flags/kw.svg' },
      { name: 'Sri Lanka', dialCode: '+94', code: 'LK', flag: 'images/flags/lk.svg' },
      { name: 'Morocco', dialCode: '+212', code: 'MA', flag: 'images/flags/ma.svg' },
      { name: 'Mexico', dialCode: '+52', code: 'MX', flag: 'images/flags/mx.svg' },
      { name: 'North Macedonia', dialCode: '+389', code: 'MK', flag: 'images/flags/mk.svg' },
      { name: 'Montenegro', dialCode: '+382', code: 'ME', flag: 'images/flags/me.svg' },
      { name: 'Malaysia', dialCode: '+60', code: 'MY', flag: 'images/flags/my.svg' },
      { name: 'Nigeria', dialCode: '+234', code: 'NG', flag: 'images/flags/ng.svg' },
      { name: 'Netherlands', dialCode: '+31', code: 'NL', flag: 'images/flags/nl.svg' },
      { name: 'Norway', dialCode: '+47', code: 'NO', flag: 'images/flags/no.svg' },
      { name: 'Nepal', dialCode: '+977', code: 'NP', flag: 'images/flags/np.svg' },
      { name: 'New Zealand', dialCode: '+64', code: 'NZ', flag: 'images/flags/nz.svg' },
      { name: 'Oman', dialCode: '+968', code: 'OM', flag: 'images/flags/om.svg' },
      { name: 'Pakistan', dialCode: '+92', code: 'PK', flag: 'images/flags/pk.svg' },
      { name: 'Panama', dialCode: '+507', code: 'PA', flag: 'images/flags/pa.svg' },
      { name: 'Peru', dialCode: '+51', code: 'PE', flag: 'images/flags/pe.svg' },
      { name: 'Philippines', dialCode: '+63', code: 'PH', flag: 'images/flags/ph.svg' },
      { name: 'Papua New Guinea', dialCode: '+675', code: 'PG', flag: 'images/flags/pg.svg' },
      { name: 'Poland', dialCode: '+48', code: 'PL', flag: 'images/flags/pl.svg' },
      { name: 'Korea, Democratic Peoples Republic', dialCode: '+850', code: 'KP', flag: 'images/flags/kp.svg' },
      { name: 'Portugal', dialCode: '+351', code: 'PT', flag: 'images/flags/pt.svg' },
      { name: 'Paraguay', dialCode: '+595', code: 'PY', flag: 'images/flags/py.svg' },
      { name: 'Palestine, State of', dialCode: '+970', code: 'PS', flag: 'images/flags/ps.svg' },
      { name: 'Qatar', dialCode: '+974', code: 'QA', flag: 'images/flags/qa.svg' },
      { name: 'Romania', dialCode: '+40', code: 'RO', flag: 'images/flags/ro.svg' },
      { name: 'Russian Federation', dialCode: '+7', code: 'RU', flag: 'images/flags/ru.svg' },
      { name: 'Saudi Arabia', dialCode: '+966', code: 'SA', flag: 'images/flags/sa.svg' },
      { name: 'Sudan', dialCode: '+249', code: 'SD', flag: 'images/flags/sd.svg' },
      { name: 'Singapore', dialCode: '+65', code: 'SG', flag: 'images/flags/sg.svg' },
      { name: 'El Salvador', dialCode: '+503', code: 'SV', flag: 'images/flags/sv.svg' },
      { name: 'Serbia', dialCode: '+381', code: 'RS', flag: 'images/flags/rs.svg' },
      { name: 'Slovakia', dialCode: '+421', code: 'SK', flag: 'images/flags/sk.svg' },
      { name: 'Slovenia', dialCode: '+386', code: 'SI', flag: 'images/flags/si.svg' },
      { name: 'Sweden', dialCode: '+46', code: 'SE', flag: 'images/flags/se.svg' },
      { name: 'Syrian Arab Republic', dialCode: '+963', code: 'SY', flag: 'images/flags/sy.svg' },
      { name: 'Thailand', dialCode: '+66', code: 'TH', flag: 'images/flags/th.svg' },
      { name: 'Turkey', dialCode: '+90', code: 'TR', flag: 'images/flags/tr.svg' },
      { name: 'Tanzania, United Republic of', dialCode: '+255', code: 'TZ', flag: 'images/flags/tz.svg' },
      { name: 'Uganda', dialCode: '+256', code: 'UG', flag: 'images/flags/ug.svg' },
      { name: 'Ukraine', dialCode: '+380', code: 'UA', flag: 'images/flags/ua.svg' },
      { name: 'United Arab Emirates', dialCode: '+971', code: 'AE', flag: 'images/flags/ae.svg' },
      { name: 'Uruguay', dialCode: '+598', code: 'UY', flag: 'images/flags/uy.svg' },
      { name: 'United States', dialCode: '+1', code: 'US', flag: 'images/flags/us.svg' },
      { name: 'Uzbekistan', dialCode: '+998', code: 'UZ', flag: 'images/flags/uz.svg' },
      { name: 'Holy See (Vatican City State)', dialCode: '+379', code: 'VA', flag: 'images/flags/va.svg' },
      { name: 'Venezuela, Bolivarian Republic of', dialCode: '+58', code: 'VE', flag: 'images/flags/ve.svg' },
      { name: 'Viet Nam', dialCode: '+84', code: 'VN', flag: 'images/flags/vn.svg' },
      { name: 'South Africa', dialCode: '+27', code: 'ZA', flag: 'images/flags/za.svg' },
      { name: 'Zimbabwe', dialCode: '+263', code: 'ZW', flag: 'images/flags/zw.svg' },
    ];

    this.selectedCountry = this.countries[91]; // UAE default

    this.contactFrom.get('dialCode')?.valueChanges.subscribe(code => {
      // If needed, find full country info:
      const country = this.countries.find(c => c.dialCode === code);
    });
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    // Allow only digits (0–9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  get fullPhoneNumber(): string {
    const dialCode = this.contactFrom.get('dialCode')?.value || '';
    const number = this.contactFrom.get('phoneNumber')?.value || '';
    return dialCode + number;
  }

  filteredCountries() {
    const filter = this.countryFilter.toLowerCase();
    return this.countries.filter(c =>
      c.name.toLowerCase().includes(filter) ||
      c.dialCode.includes(filter)
    );
  }

  getSelectedCountry() {
    const code = this.contactFrom.get('dialCode')?.value;
    return this.filteredCountries().find(c => c.dialCode === code);
  }

  compareDialCode = (a: any, b: any) => a === b;

  onPhoneKeyDown(event: KeyboardEvent) {
    const allowed = [
      'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'
    ];
    // Allow navigation and deletion keys
    if (allowed.includes(event.key)) return;

    // Allow digits 0–9
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault(); // Block non-digit keystrokes
    }
  }

  onPhonePaste(event: ClipboardEvent) {
    const paste = event.clipboardData?.getData('text') ?? '';
    // If paste contains any non-digit characters, block it
    if (!/^[0-9]+$/.test(paste)) {
      event.preventDefault();
    }
  }


  // submitContactForm() {
  //   if (this.contactFrom.invalid) {
  //     this.contactFrom.markAllAsTouched();
  //     return;
  //   }
  //   this.isLoading.set(true);
  //   this._recaptchaV3Service.execute('submit_demo').subscribe({
  //     next: token => {
  //       this.isLoading.set(false);
  //       this.contactFrom.patchValue({ captcha: token });
  //       const payload: any = { ...this.contactFrom.value, phoneNumber: this.fullPhoneNumber };
  //       console.log(payload);
  //       this.contactFrom.reset({
  //         dialCode: '+971',
  //         country: 'United Arab Emirates',
  //         phoneNumber: ''
  //       });
  //       this.selectedCountry = this.countries.find(c => c.dialCode === '+971');
  //     }
  //   });
  // , phoneNumber: this.fullPhoneNumber}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCountry(country: any) {
    this.selectedCountry = country;
    this.dropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    if (this.dropdownOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }

  @HostListener('window:scroll')
  handleScroll() {
    if (this.dropdownOpen) {
      this.dropdownOpen = false;
    }
  }
  submitContactForm() {
    if (this.contactFrom.invalid) {
      this.contactFrom.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this._recaptchaV3Service.execute('submit_demo').subscribe({
      next: token => {
        this.contactFrom.patchValue({ captcha: token });
        const payload: any = { ...this.contactFrom.value };

        this._verastService.getContactUs(payload).subscribe({
          next: res => {
            this.isLoading.set(false);
            this._snackBar.open(res.message || 'Request sent successfully!', 'OK', { duration: 4000 });

            this.contactFrom.reset({
              dialCode: '+971',
              country: 'United Arab Emirates',
              phoneNumber: ''
            });
            // this.selectedCountry = this.countries.find(c => c.dialCode === '+971');
          },
          error: err => {
            this.isLoading.set(false);
            this._snackBar.open(err.error.message || 'Something went wrong', 'OK', { duration: 3000 });
          }
        });
      },
      error: () => {
        this.isLoading.set(false);
        this._snackBar.open('reCAPTCHA failed. Please try again.', 'OK', { duration: 3000 });
      }
    });
  }

  // submitContactForm() {
  //   if (this.contactFrom.invalid) {
  //     this.contactFrom.markAllAsTouched();
  //     return;
  //   }
  //   this.isLoading.set(true);
  //   const payload: ContactUs = { ...this.contactFrom.value };
  //   this._verastService.getContactUs(payload).subscribe({
  //     next: res => {
  //       this.isLoading.set(false);
  //       this._snackBar.open(res.message || 'Request sent successfully!', 'OK', { duration: 5000 });
  //       this.contactFrom.reset({
  //         dialCode: '+971',
  //         country: 'United Arab Emirates',
  //         phoneNumber: ''
  //       });
  //     },
  //     error: err => {
  //       this.isLoading.set(false);
  //       this._snackBar.open(err.error.message || 'Something went wrong', 'OK', { duration: 5000 });
  //     }
  //   });
  // }

}

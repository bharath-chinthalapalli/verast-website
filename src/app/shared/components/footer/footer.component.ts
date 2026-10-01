import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private _router = inject(Router);

  companyArray = signal<any[]>([
    {
      title: 'Company',
      navLinks: [
        {
          link: 'About Us',
          path: '/aboutUs',
          icon: '',
        },
        {
          link: 'Our Services',
          path: '/ourServices',
          icon: '',
        },
        {
          link: 'Contact Us',
          path: '/contactUs',
          icon: '',
        },
      ]
    },
  ]);

  contactArray = signal<any[]>([
    {
      title: 'Contact',
      navLinks: [
        // {
        //   link: 'Abu Dhabi',
        //   path: '',
        //   icon: 'images/location_icon.svg',
        
        // },
        // {
        //   link: '+971 54 223 0805',
        //   path: 'tel:+971542230805',
        //   icon: 'images/call_icon.svg',
        // },
        {
          link: 'sales@verast.io',
          path: 'mailto:sales@verast.io',
          icon: 'images/mail_icon.svg',
          underLine:true
        },
      ]
    },
  ]);

  resourcesArray = signal<any[]>([
    {
      title: 'Resources',
      navLinks: [
        {
          link: 'Help & Support',
          path: '/contactUs',
          icon: '',
        }
      ]
    },
  ])

  navToContact() {
    this._router.navigate(['/contact'])
  }


}

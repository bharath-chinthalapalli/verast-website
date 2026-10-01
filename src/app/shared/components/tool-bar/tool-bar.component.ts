import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { FooterComponent } from "../footer/footer.component";
import { filter } from 'rxjs';


@Component({
  selector: 'app-tool-bar',
  imports: [CommonModule, RouterOutlet, RouterModule, MatToolbarModule, MatMenuModule, MatIcon, FooterComponent],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent implements OnInit {
  hoveredMenu: string = '';
  hoveredItem: string = '';
  isMobileMenuOpen = false;
  mobileServicesOpen = false;
  isHomePage = false;

  optionMenu = signal<any[]>([
    {
      option: 'HIVE Encryption',
      route: 'https://hiveencrypt.com/',
    },
    {
      option: 'PMI',
      route: ''
    },
  ]);

  private _router = inject(Router);

  ngOnInit() {
    //1. Check on initial load (refresh case)
    this.checkHomePage(this._router.url);

    // 2. Also update on every navigation
    this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.checkHomePage(event.urlAfterRedirects);
      });
  }

  private checkHomePage(url: string) {
    this.isHomePage = url === '/' || url.startsWith('/home/');
  }

  // navToConsultancy() {
  //   const conultancyId = '/home/conultancy'
  //   this._router.navigate([conultancyId]);
  // }
  // navToBrands() {
  //   const ourBrandId = '/home/ourBrands'
  //   this._router.navigate([ourBrandId]);
  // }
  
  navToConsultancy() {
    const sectionId = '/home/conultancy'
    this._router.navigate([sectionId]);
  }
  navToBrands() {
    const sectionId = '/home/ourBrands'
    this._router.navigate([sectionId]);
  }
}

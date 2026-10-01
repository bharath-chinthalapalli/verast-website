import { Routes } from '@angular/router';
import { ToolBarComponent } from './shared/components/tool-bar/tool-bar.component';

export const routes: Routes = [
    {
        path: '',
        component: ToolBarComponent,
        title: 'Verast',
        children: [
            {
                path: '',
                loadComponent: () => import('./components/home/home/home.component').then(m => m.HomeComponent),
                title: 'Home | Verast'
            },
            {
                path: 'home/:sectionId',
                loadComponent: () => import('./components/home/home/home.component').then(m => m.HomeComponent),
                title: 'Home | Verast'
            },
            // {
            //     path: 'home/:consultancyId',
            //     loadComponent: () => import('./components/home/home/home.component').then(m => m.HomeComponent),
            //     title: 'Home | Verast'
            // },
            // {
            //     path: 'home/:ourBrandId',
            //     loadComponent: () => import('./components/home/home/home.component').then(m => m.HomeComponent),
            //     title: 'Home | Verast'
            // },
            {
                path: 'aboutUs',
                loadComponent: () => import('./components/about-us/about-us/about-us.component').then(m => m.AboutUsComponent),
                title: 'About Us | Verast'
            },
            {
                path: 'ourServices',
                loadComponent: () => import('./components/our-services/services-main/services-main.component').then(m => m.ServicesMainComponent),
                title: 'Our Services | Verast'
            },
            {
                path: 'contactUs',
                loadComponent: () => import('./components/contact-us/contact-us-page/contact-us-page.component').then(m => m.ContactUsPageComponent),
                title: 'Contact Us | Verast'
            },
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

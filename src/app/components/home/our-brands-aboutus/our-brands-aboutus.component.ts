import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-brands-aboutus',
  imports: [CommonModule],
  templateUrl: './our-brands-aboutus.component.html',
  styleUrl: './our-brands-aboutus.component.scss'
})
export class OurBrandsAboutusComponent {
  private _router = inject(Router);
  brandList = signal<any[]>([
    {
      name: "HIVE",
      logo: "images/hive.svg",
      path: "https://hiveencrypt.com/",
      description: "HIVE encryption acts like a strong protector for all your secure connections. It's built with a precise design and clear rules to manage secret keys and control who can access your data."
    },
    {
      name: "PMI",
      logo: "images/pmi.svg",
      path: "",
      description: "Private Medical Insurance (PMI) SaaS Platform Our PMI solution is a fully integrated yet modular cloud platform that transforms the way insurers, brokers, and healthcare providers operate. With built-in Sales Force Management, E-Commerce, and a Dynamic Pricing Engine, insurers can streamline sales, distribution, and product personalization with ease. The platform empowers payers and providers through automated pre-approvals, AI-driven claims adjudication, and rule-based validations, ensuring speed, accuracy, and compliance. Seamlessly connected with regulatory systems like CHI/IA, NPHIES, ZATCA and NJAM, and equipped with self-service portals and mobile apps for clients and members, the solution drives transparency, efficiency, and superior customer experience. Designed to be modular, scalable, and secure, it gives insurers the flexibility to adopt what they need today and expand as their business grows. Digitizing Health Insurance – From Sales to Claims, Seamlessly."
    },
    
  ]);

  navToBrand(link: any) {
    this._router.navigate(link);
  }

toggleCard(index: number) {
  this.brandList().forEach((brand, i) => {
    brand.expanded = (i === index) ? !brand.expanded : false;
  });
}

}
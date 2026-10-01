import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-new-our-services-home',
  imports: [CommonModule],
  templateUrl: './new-our-services-home.component.html',
  styleUrl: './new-our-services-home.component.scss'
})
export class NewOurServicesHomeComponent {
  servicesList = signal<any[]>([
    {
      title:"Outsourcing Consultancy",
      description: "Provides top-tier expertise and resident professionals to ensure operational efficiency and meet workforce needs.",
      img: "images/outsourcing_consultancy_default.png",
      img_hover:"images/outsourcing_consultancy_hover.png",
      bg:"images/outsourcing_consultancy_bg.svg"
    },
    {
      title:"Scalable Security",
      description: "VERAST provides tailored cybersecurity to protect data and safeguard businesses from threats.",
      img: "images/scalable_security_default.png",
      img_hover:"images/scalable_security_hover.png",
      bg:"images/scalable_security_bg.svg"
    },
    {
      title:"Procurement Services",
      description: "VERAST delivers procurement services across OEMs and providers, ensuring customers get best-fit solutions.",
      img: "images/procurement_servicesengineering_expertise_default.png",
      img_hover:"images/procurement_servicesengineering_expertise_hover.png",
      bg:"images/procurement_servicesengineering_expertise_bg.svg"
    },
    {
      title:"Consulting Services",
      description: "VERAST consultants provide vital support to navigate challenges and boost business performance.",
      img: "images/consulting_services_default.png",
      img_hover:"images/consulting_services_hover.png",
      bg:"images/consulting_services_bg.svg"
    },
    {
      title:"Software Development",
      description: "We deliver CRM, ERP, HRM, SAP, and DMS solutions with implementation and certified vendor support.",
      img: "images/software_development_default.png",
      img_hover:"images/software_development_hover.png",
      bg:"images/software_development_bg.svg"
    },
    {
      title:"Engineering Expertise",
      description: "VERAST engineers build innovative, user-focused software with intuitive design for a premium experience.",
      img: "images/engineering_expertise_default.png",
      img_hover:"images/engineering_expertise_hover.png",
      bg:"images/engineering_expertise_bg.svg"
    },
  ]);
}

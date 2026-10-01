import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-our-services',
  imports: [CommonModule, MatIcon],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  isShowReadMore = signal<boolean>(true);
  servicesList = signal<any[]>([
    {
      servicesImage: 'images/Building_scalable_platform.png',
      title: 'Outsourcing Consultancy',
      description: 'Access to top-tier expertise, ensuring operational efficiency. Also, takes care of the work force requirements of its clients by providing resident engineers and professionals who are experts in the required field.',
    },
    {
      servicesImage: 'images/scalable_security.png',
      title: 'Scalable Security',
      description: "In the highly advanced world of today, a problem-free operation and a good reputation of your organization depend on the digital security of the organization. That's why digital compatibility provides a wide range of security services customized for securing your information and shielding your business from cybersecurity attacks",
    },
    {
      servicesImage: 'images/procuremen_services.png',
      title: 'Procurement Services',
      description: 'VERAST relies on a strong supplier base which enables it to provide procurement services from a wide range of OEM and service providers, ensuring customer have a very friendly yet best fit for his needs, that includes: Hardware (HP, Dell, Cisco) Software (MS,EMC, Whatsup).',
    },
    {
      servicesImage: 'images/consulting_services.png',
      title: 'Consulting Services',
      description: 'The modern business environment can be difficult to navigate. The dedicated consultants of digital compatibility offer crucial assistance and support which enable you to identify prospects and maximize your business performance.',
    },
    {
      servicesImage: 'images/software_development.png',
      title: 'Software Development',
      description: 'Custom-built solutions tailored to meet your business needs. Such as licensing and implementation: we license and implement well-known software for all purposes and needs such as (CRM, ERP, HRM, SAP, DMS) from tier one vendors like (Microsoft, Oracle, VMWare, EMC, Cisco) at competitive cost, installed and implemented by our certified engineers.',
    },
    {
      servicesImage: 'images/engineering_expertise.png',
      title: 'Engineering Expertise',
      description: "In every user based industry, a premium user experience is important. Digital compatibility's skilled engineers build innovative software applications with intuitive interfaces and user-centric design principles for you.",
    }
  ]);

  // showReadmore(){
  //   this.isShowReadMore.set(!this.isShowReadMore())
  // }
  showReadmore() {
    this.isShowReadMore.update((value) => !value);
  }
  // isCollapsed = true;

  // toggleCollapse() {
  //   this.isCollapsed = !this.isCollapsed;
  // }

}

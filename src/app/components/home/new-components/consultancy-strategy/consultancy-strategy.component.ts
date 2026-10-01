import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-consultancy-strategy',
  imports: [],
  templateUrl: './consultancy-strategy.component.html',
  styleUrl: './consultancy-strategy.component.scss'
})
export class ConsultancyStrategyComponent {
  consultanciesList = signal<any[]>([
    {
      img: "images/scalable_security_consulting.svg",
      defaultTitle: "Software Services",
      hoverTitle: "We offer comprehensive software development solutions including custom application development, enterprise software integration, and software maintenance. Our agile approach ensures scalable, secure, and  systems tailored to your business needs."
    },
    {
      img: "images/it_Infrastructure_consulting.svg",
      defaultTitle: "IT Infrastructure",
      hoverTitle: "Our expertise spans IT strategic planning, technology architecture, service-oriented architecture, service management, implementation, optimization, and long-term support—enabling organizations to maximize their technology investment."
    },
    {
      img: "images/business_consulting.svg",
      defaultTitle: "Business Consultancy",
      hoverTitle: "Our expertise spans IT strategic planning, technology architecture, service-oriented architecture, service management, implementation, optimization, and long-term support—enabling organizations to maximize their technology investment."
    },
    {
      img: "images/outsourcing_consulting.svg",
      defaultTitle: "Outsourcing",
      hoverTitle: "We provide strategic IT and business process outsourcing solutions that enhance operational efficiency, reduce costs, and enable organizations to focus on core competencies—delivering measurable results through expert resource management."
    }
  ]);
}

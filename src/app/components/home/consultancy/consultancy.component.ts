import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-consultancy',
  imports: [CommonModule,MatIcon],
  templateUrl: './consultancy.component.html',
  styleUrl: './consultancy.component.scss'
})
export class ConsultancyComponent {
    // Store open/close state for each card
  expandedCardIndex = signal<number | null>(null);
  isShowReadMore = signal<boolean>(true);
  isShowSubText = signal<boolean>(true);

  serviceList=signal<any[]>([
    {
      title:"Cybersecurity",
      description:"We provide end-to-end security services including ISO 27001 compliance, ISMS implementation, risk",
      additonalDescription:"assessment, penetration testing, and vulnerability assessment—helping organizations strengthen their security posture and safeguard critical information assets.",
      image:"images/services-cyber-security.png"
    },
    {
      title:"IT Infrastructure",
      description:"Our expertise spans IT strategic planning, technology architecture, service-oriented architecture,",
      additonalDescription:"service management, implementation, optimization, and long-term support—enabling organizations to maximize their technology investment.",
      image:"images/IT_Infrastructure.png"
    },
       {
      title:"Business Consultancy",
      description:"We offer comprehensive consultancy services across business process optimization, operational excellence,",
      additonalDescription:"change management, and strategic planning—delivering tailored solutions that drive sustainable growth and competitive advantage.",
      image:"images/business_consultancy.png"
    },
       {
      title:"Outsourcing",
      description:"We provide strategic IT and business process outsourcing solutions that enhance operational efficiency,",
      additonalDescription:"reduce costs, and enable organizations to focus on core competencies—delivering measurable results through expert resource management.",
      image:"images/outsourcing.png"
    },
  ]);
  showReadAllLess() {
    this.isShowReadMore.update((value) => !value);
  }
  showReadMoreLess() {
    this.isShowSubText.update((value) => !value);
  }
  
  toggleCard(index: number) {
    this.expandedCardIndex.update(current => current === index ? null : index);
  }

  isExpanded(index: number): boolean {
    return this.expandedCardIndex() === index;
  }
}

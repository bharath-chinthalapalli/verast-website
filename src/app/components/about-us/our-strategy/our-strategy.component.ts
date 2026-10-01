import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-our-strategy',
  imports: [],
  templateUrl: './our-strategy.component.html',
  styleUrl: './our-strategy.component.scss'
})
export class OurStrategyComponent {
  strategiesList = signal<any[]>([
    {
      title: "Innovation and Continuous Improvement",
      subTitle: "We foster a culture of innovation, consistently integrating the latest technologies and best practices into our service offerings. This ensures that our clients receive forward-thinking, efficient, and competitive solutions that future-proof their operations.",
      imageDefault: "images/Innovation_Continuous_default.png",
      imageHover: "images/Innovation_Continuous_hover.png"
    },
    {
      title: "Operational Excellence and Technical Expertise",
      subTitle: "Our team of expert engineers is skilled in complex system integration and network infrastructure, enabling us to provide end-to-end services with precision. We maintain high standards of quality and reliability in every project, guided by best-in-class methodologies.",
      imageDefault: "images/operational_excellence_default.png",
      imageHover: "images/operational_excellence_hover.png"
    },
    {
      title: "Agility and Adaptability",
      subTitle: "In an ever-evolving digital environment, we remain agile—adapting quickly to technological advances and market shifts. This flexibility allows us to respond swiftly to client demands and industry changes with customized, scalable solutions.",
      imageDefault: "images/agility_and_adaptability_default.png",
      imageHover: "images/agility_and_adaptability_hover.png"
    },
    {
      title: "Integrity and Ethical Practice",
      subTitle: "Transparency and ethical conduct are fundamental to our operations. We build trust through honest communication, responsible service delivery, and unwavering accountability.",
      imageDefault: "images/Integrity_default.png",
      imageHover: "images/Integrity_ethical_hover.png"
    },
    {
      title: "Regional Leadership and Expansion",
      subTitle: "With a strong presence in Abu Dhabi, we aim to expand our footprint across the MENA region and beyond. Our vision drives us to become a leading force in digital transformation by offering cutting-edge solutions that redefine business efficiency.",
      imageDefault: "images/regional_leadership_default.png",
      imageHover: "images/regional_leadership_hover.png"
    },
    {
      title: "Client-Centric Service Delivery and customer experience",
      subTitle: "Customer service is the foundation of our business. We deliver exceptional ICT support, enabling clients to focus on their core goals. By understanding their needs, we provide tailored solutions aligned with business objectives, backed by proactive engagement and strict SLA compliance.",
      imageDefault: "images/client_centric_service_default.png",
      imageHover: "images/client_centric_service_hover.png"
    },

  ]);
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-core-values',
  imports: [],
  templateUrl: './core-values.component.html',
  styleUrl: './core-values.component.scss'
})
export class CoreValuesComponent {
  coreList = signal<any[]>([
    {
      title: "Customer-Centricity",
      subTitle: "Your success is our priority-we're dedicated to meeting your unique business needs. ",
      imageDefault: "images/customer_centric_default.png",
      imageHover: "images/customer_centric_hover.png"
    },
    {
      title: "Integrity",
      subTitle: "Transparent, ethical practices in everything we do.",
      imageDefault: "images/integrity_defualt.png",
      imageHover: "images/Integrity_hover.png"
    },
    {
      title: "Excellence",
      subTitle: "Consistently delivering high-quality results that exceed expectations. ",
      imageDefault: "images/excellence_default.png",
      imageHover: "images/excellence_hover.png"
    },
    {
      title: "Agility",
      subTitle: "Adapting swiftly to change with flexible, tailored solutions. ",
      imageDefault: "images/agility_default.png",
      imageHover: "images/agility_hover.png"
    },
  ]);
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-industries',
  imports: [],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {
  industriesList = signal<any[]>([
    {
      imageDefault: "images/health_Care_default.png",
      imageHover: "images/healthjCare_hover.png",
      title: "Healthcare",
      vectorHover:"images/healthCareVector.svg"
    },
    {
      imageDefault: "images/e_commerce_default.png",
      imageHover: "images/e_commerce_hover.png",
      title: "E-Commerce",
      vectorHover:"images/eCommerceVector.svg"
    },
    {
      imageDefault: "images/education_default.png",
      imageHover: "images/education_hover.png",
      title: "Education",
      vectorHover:"images/educationVector.svg"
    },
    {
      imageDefault: "images/finance_default.png",
      imageHover: "images/finance_hover.png",
      title: "Finance",
      vectorHover:"images/financeVector.svg"
    },
    {
      imageDefault: "images/government_default.png",
      imageHover: "images/government_hover.png",
      title: "Government",
      vectorHover:"images/governmentVector.svg"
    },
    {
      imageDefault: "images/entertainment_default.png",
      imageHover: "images/entertainment_hover.png",
      title: "Infrastructure & Network",
      vectorHover:"images/InfrastructureVector.svg"
    }
  ])
}

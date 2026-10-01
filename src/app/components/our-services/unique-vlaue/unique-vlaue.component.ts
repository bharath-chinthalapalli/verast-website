import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-unique-vlaue',
  imports: [],
  templateUrl: './unique-vlaue.component.html',
  styleUrl: './unique-vlaue.component.scss'
})
export class UniqueVlaueComponent {
  uniqueCards = signal<any[]>([
    {
      title: "Proven Track Record In",
      boldTitle: "Complex ICT Projects",
      imageDefault: "images/complex_ICT_default.png",
      imageHover: "images/complex_ICT_hover.png"
    },
       {
      title: "Expert Engineering Team",
      boldTitle: "With Deep Integration Experience",
      imageDefault: "images/deep_integration_default.png",
      imageHover: "images/deep_integration_hover.png"
    },
       {
      title: "Exceptional Customer",
      boldTitle: "Satisfaction And Retention",
      imageDefault: "images/satisfaction_retention_default.png",
      imageHover: "images/satisfaction_retention_hover.png"
    },
       {
      title: "Scalable Service Model",
      boldTitle: "For Regional Expansion",
      imageDefault: "images/regional_expansion_default.png",
      imageHover: "images/regional_expansion_hover.png"
    },
  ])
}

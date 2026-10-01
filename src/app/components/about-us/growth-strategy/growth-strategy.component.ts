import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-growth-strategy',
  imports: [],
  templateUrl: './growth-strategy.component.html',
  styleUrl: './growth-strategy.component.scss'
})
export class GrowthStrategyComponent {
  growthStrategiesList = signal<any[]>([
    {
      title: "Your Success Is Our Priority-we're Dedicated To Meeting Your Unique Business Needs.",
      imageDefault: "images/your_success_is_our_priority_default.png",
      imageHover: "images/your_success_is_our_priority_hover.png"
    },
    {
      title: "Transparent, Ethical Practices In Everything We Do.",
      imageDefault: "images/Transparent_default.png",
      imageHover: "images/Transparent_hover.png"
    },
    {
      title: "Consistently Delivering High-quality Results That Exceed Expectations.",
      imageDefault: "images/consistently_default.png",
      imageHover: "images/consistently_hover.png"
    },
    {
      title: "Adapting Swiftly To Change With Flexible, Tailored Solutions.",
      imageDefault: "images/adapting_swiftly_default.png",
      imageHover: "images/adapting_swiftly_hover.png"
    },
  ]);
}

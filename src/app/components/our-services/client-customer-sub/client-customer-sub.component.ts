import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-client-customer-sub',
  imports: [],
  templateUrl: './client-customer-sub.component.html',
  styleUrl: './client-customer-sub.component.scss'
})
export class ClientCustomerSubComponent {
  clientCustomerList = signal<any[]>([
    {
      title: "Robust, Agile Operating model",
      imageDefault: "images/robust_agile_defautl.png",
      imageHover: "images/robust_agile_hover.png"
    },
    {
      title: "Recurring Revenue With Low Churn",
      imageDefault: "images/recurring_default.png",
      imageHover: "images/recurring_hover.png"
    },
      {
      title: "Experienced Leadership and Technical Teams",
      imageDefault: "images/experienced_default.png",
      imageHover: "images/experienced_hover.png"
    },
      {
      title: "High Potential For Scalable, Regional Growth",
      imageDefault: "images/high_potential_default.png",
      imageHover: "images/high_potential_hover.png"
    },
  ]);
}

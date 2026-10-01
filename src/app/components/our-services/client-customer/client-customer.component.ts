import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-client-customer',
  imports: [],
  templateUrl: './client-customer.component.html',
  styleUrl: './client-customer.component.scss'
})
export class ClientCustomerComponent {
  clientCustomerList = signal<any[]>([
    {
      title: "Customer-Focused",
      subTitle: "Your needs are our priority, and we're committed to providing a top-tier customer experience.",
      imageDefault: "images/customer_focused.png",
      imageHover: "images/customer_focused_hover.png"
    },
    {
      title: "Passionate Excellence",
      subTitle: "We are dedicated to perfecting our craft and delivering outstanding results.",
      imageDefault: "images/passionate_excellence.png",
      imageHover: "images/customer_focused_hover.png"
    },
    {
      title: "Proven Success",
      subTitle: "With a strong track record, we've built a reputation for reliability and achievement.",
      imageDefault: "images/proven_success.png",
      imageHover: "images/customer_focused_hover.png"
    },
    {
      title: "Expertise",
      subTitle: "Our technical know-how has driven success for clients across various industries.",
      imageDefault: "images/expertise.png",
      imageHover: "images/customer_focused_hover.png"
    },
      {
      title: "Future-Ready Solutions",
      subTitle: "We ensure our services are adaptable and future-proof.",
      imageDefault: "images/future_ready_solutions.png",
      imageHover: "images/customer_focused_hover.png"
    },
      {
      title: "Innovative and Driven",
      subTitle: "We are relentless in our pursuit of innovation and excellence.",
      imageDefault: "images/innovative.png",
      imageHover: "images/customer_focused_hover.png"
    },
  ]);
}

import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { c } from "../../../../../../node_modules/@angular/cdk/a11y-module.d-DBHGyKoh";

@Component({
  selector: 'app-about-our-company',
  imports: [MatIcon, RouterLink],
  templateUrl: './about-our-company.component.html',
  styleUrl: './about-our-company.component.scss'
})
export class AboutOurCompanyComponent {
deliverList= signal<any[]>([
  {
    icon:"done",
    item:"End-to-end ICT solutions"
  },
  {
    icon:"done",
    item:"Trusted by government & private sectors"
  },
  {
    icon:"done",
    item:"Secure infrastructure & data protection"
  },
  {
    icon:"done",
    item:"Expert system integration"
  },
]);
}

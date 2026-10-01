import { Component } from '@angular/core';
import { UniqueVlaueComponent } from "../unique-vlaue/unique-vlaue.component";
import { ClientCustomerComponent } from "../client-customer/client-customer.component";
import { MatIcon } from '@angular/material/icon';
import { ClientCustomerSubComponent } from "../client-customer-sub/client-customer-sub.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-main',
  imports: [MatIcon, UniqueVlaueComponent, ClientCustomerComponent, ClientCustomerSubComponent, RouterLink],
  templateUrl: './services-main.component.html',
  styleUrl: './services-main.component.scss'
})
export class ServicesMainComponent {

}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-our-brands-built',
  imports: [],
  templateUrl: './our-brands-built.component.html',
  styleUrl: './our-brands-built.component.scss'
})
export class OurBrandsBuiltComponent {
brandList = signal<any[]>([
  {
    brandImage:'images/hive_logo_our_brands.png',
    brandTitle:"HIVE",
    subBrandList:[
      {
        image:'images/fast_encryption_our_brands.png',
        title:'Fast Encryption',
        description:'4x faster encryption for real-time performance.'
      },
         {
        image:'images/scalable_secutirty_our_brands.png',
        title:'Scalable Security',
        description:'Unified protection for all data types.'
      },
         {
        image:'images/trusted_clients_our_brands.png',
        title:'Trusted by Clients',
        description:'Built for reliability and future-proof security.'
      },
    ]
  },
  {
    brandImage:'images/pmi_logo_our_brands.png',
     brandTitle:"PMI",
    subBrandList:[
      {
        image:'images/smart_policies_our_brands.png',
        title:'Smart Policies',
        description:'End-to-end policy automation.'
      },
         {
        image:'images/smart_claims_our_brands.png',
        title:'Smart Claims',
        description:'Faster, fraud-free processing.'
      },
         {
        image:'images/secure_growth_our_brands.png',
        title:'Secure Growth',
        description:'Unified protection for all data types.'
      },
    ]
  },
]);
}

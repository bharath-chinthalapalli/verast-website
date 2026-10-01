import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-industries-we-serve-solutions',
  imports: [CommonModule,SlickCarouselModule],
  templateUrl: './industries-we-serve-solutions.component.html',
  styleUrl: './industries-we-serve-solutions.component.scss'
})
export class IndustriesWeServeSolutionsComponent {

  industiresList = [
    {
      title: "Healthcare",
      iconDefault: "images/industires_health_care_default.png",
      iconHover: "images/industires_health_care_hover.png"
    },
    {
      title: "E-commerce",
      iconDefault: "images/industires_e_commerce_default.png",
      iconHover: "images/industires_e_commerce_hover.png"
    },
    {
      title: "Education",
      iconDefault: "images/industires_education_default.png",
      iconHover: "images/industires_education_hover.png"
    },
    {
      title: "Finance",
      iconDefault: "images/industires_finance_default.png",
      iconHover: "images/industires_finance_hover.png"
    },
    {
      title: "Government",
      iconDefault: "images/industires_govt_default.png",
      iconHover: "images/industires_govt_hover.png"
    },
    {
      title: "Infrastructure & Network",
      iconDefault: "images/industires_infra_default.png",
      iconHover: "images/industires_infra_hover.png"
    },
  ];
  
  slideConfig = {
  slidesToShow: 4,  // Show 4 like in Figma
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
  speed: 800,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

}

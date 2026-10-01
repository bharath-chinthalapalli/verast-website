import { Component, signal } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { f } from "../../../../../node_modules/@angular/material/icon-module.d-COXCrhrh";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-testimonal',
  imports: [SlickCarouselModule, MatIcon],
  templateUrl: './testimonal.component.html',
  styleUrl: './testimonal.component.scss'
})
export class TestimonalComponent {
  technologyList = signal<any[]>([]);
  // technologyList = signal<any[]>([
  //   {
  //     clinetLogo: 'images/splunk.png'
  //   },
  //   {
  //     clinetLogo: 'images/dell.png'
  //   },
  //   {
  //     clinetLogo: 'images/genesys.png'
  //   },
  //   {
  //     clinetLogo: 'images/aruba.png'
  //   },
  //   {
  //     clinetLogo: 'images/redhat.png'
  //   },
  //   {
  //     clinetLogo: 'images/oracle.png'
  //   },
  //   {
  //     clinetLogo: 'images/acronis.png'
  //   },
  //   {
  //     clinetLogo: 'images/forcepoint.png'
  //   },
  //   {
  //     clinetLogo: 'images/testimonals/testimonal-01.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-02.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-03.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-04.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-05.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-06.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-07.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-08.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-09.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-10.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-11.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-12.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-13.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-14.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-15.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-16.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-17.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-17.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-18.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-19.svg'
  //   },
  //       {
  //     clinetLogo: 'images/testimonals/testimonal-20.svg'
  //   },
  //   {
  //     clinetLogo: 'images/partnered_global_logos.png'
  //   }
  // ]);

  constructor() {
    // Suppose you have 56 images
    const totalImages = 56;

    const images = Array.from({ length: totalImages }, (_, i) => ({
      clinetLogo: `images/testimonals/testimonal-${String(i + 1).padStart(2, '0')}.svg`
    }));

    this.technologyList.set(images);
  }

  slideConfig = {
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // hide default arrows
    dots: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  // slideConfig = {
  //   slidesToShow: 7,
  //   slidesToScroll: 1,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 0, 
  //   speed: 3000,      
  //   cssEase: 'linear', 
  //   arrows: false,
  //   dots: false,
  //   pauseOnHover: true, 
  //   pauseOnFocus: true, 
  //   responsive: [
  //     { breakpoint: 1280, settings: { slidesToShow: 5 } },
  //     { breakpoint: 1024, settings: { slidesToShow: 4 } },
  //     { breakpoint: 768, settings: { slidesToShow: 3 } },
  //     { breakpoint: 640, settings: { slidesToShow: 2 } },
  //     { breakpoint: 480, settings: { slidesToShow: 1 } }
  //   ]
  // };


}

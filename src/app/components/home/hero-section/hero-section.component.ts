import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

  sidesArray = signal<any[]>([
    {
      image: "images/hero_section_image.png"
    },
    {
      image: "images/hero_section_second_slide.png"
    }
  ]);

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    infinite: false,
    autoplaySpeed: 1,             // no delay between transitions
    speed:1000,
    cssEase: 'ease',            // smooth, continuous animation
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    draggable: true,
    swipe: true,
    fade: true,
  };

}

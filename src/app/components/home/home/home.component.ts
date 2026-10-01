import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestimonalComponent } from "../testimonal/testimonal.component";
import { NewHeroSectionComponent } from "../new-components/new-hero-section/new-hero-section.component";
import { OurBrandsBuiltComponent } from "../new-components/our-brands-built/our-brands-built.component";
import { NewOurServicesHomeComponent } from "../new-components/new-our-services-home/new-our-services-home.component";
import { AboutOurCompanyComponent } from "../new-components/about-our-company/about-our-company.component";
import { ConsultancyComponent } from "../consultancy/consultancy.component";
import { ConsultancyStrategyComponent } from "../new-components/consultancy-strategy/consultancy-strategy.component";
import { IndustriesWeServeSolutionsComponent } from "../new-components/industries-we-serve-solutions/industries-we-serve-solutions.component";

@Component({
  selector: 'app-home',
  imports: [TestimonalComponent, NewHeroSectionComponent, OurBrandsBuiltComponent, NewOurServicesHomeComponent, AboutOurCompanyComponent, ConsultancyStrategyComponent, IndustriesWeServeSolutionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{
  ticketStatus: string | null = null;
  brandId: string | null = null;


  private _activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // this._activatedRoute.paramMap.subscribe((params) => {
    //   this.ticketStatus = params.get('consultancyId');
    //   if (this.ticketStatus) {
    //     this.scrollToSection(this.ticketStatus);
    //     console.log(this.ticketStatus)
    //   }
    // });

    // this._activatedRoute.paramMap.subscribe((params) => {
    //   this.brandId = params.get('ourBrandId');
    //   if (this.brandId) {
    //     this.scrollToSection(this.brandId);
    //     console.log(this.brandId)
    //   }
    // });
    this._activatedRoute.paramMap.subscribe((params) => {
  const sectionId = params.get('sectionId');
  if (sectionId) {
    this.scrollToSection(sectionId);
  }
});

  }
  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }

  scrollToSection(sectionId: string): void {
    // wait for DOM to be ready
    setTimeout(() => {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        const yOffset = -100; // Adjust this value as per your header/navbar height
        const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        console.warn(`Element with id '${sectionId}' not found.`);
      }
    }, 300); // Slight delay to ensure DOM is fully rendered
  }
}

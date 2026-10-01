import { Component } from '@angular/core';
import { MissionVisionComponent } from "../mission-vision/mission-vision.component";
import { CoreValuesComponent } from "../core-values/core-values.component";
import { OurStrategyComponent } from "../our-strategy/our-strategy.component";
import { GrowthStrategyComponent } from "../growth-strategy/growth-strategy.component";
import { BreadCrumbComponent } from '../../../shared/utils/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-about-us',
  imports: [BreadCrumbComponent, MissionVisionComponent, CoreValuesComponent, OurStrategyComponent, GrowthStrategyComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}

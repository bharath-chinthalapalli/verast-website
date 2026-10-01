import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mission-vision',
  imports: [],
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.scss'
})
export class MissionVisionComponent {
  missionList = signal<any[]>([
    {
      title: "Mission",
      subTitle: "To deliver innovative digital solutions that help businesses adapt, grow, and thrive in a rapidly evolving digital world.",
      image: "images/mission_vector.png"
    },
    {
      title: "Vision",
      subTitle: "To be a leading provider of reliable and cutting-edge digital solutions across the MENA region and beyond.",
      image: "images/vision_vector.png"
    }
  ])
}

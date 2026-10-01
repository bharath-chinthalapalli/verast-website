import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'verast-front-end';
  constructor(router: Router, viewportScroller: ViewportScroller) {

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}

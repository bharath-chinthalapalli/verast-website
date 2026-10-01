import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter} from '@angular/router';
// import { HttpRequestInterceptor } from './core/interceptors/http.interceptor';

import { routes } from './app.routes';
import { RECAPTCHA_V3_SITE_KEY, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
      provideHttpClient(
      withInterceptors([])
    ),
      { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKeyV3 },
    { provide: RECAPTCHA_SETTINGS, useValue: { siteKey: environment.recaptcha.siteKeyV2 } }
  ]
};

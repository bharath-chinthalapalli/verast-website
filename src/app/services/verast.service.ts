import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { take } from 'rxjs';
import { ContactUs } from '../modals/verast';

@Injectable({
  providedIn: 'root'
})
export class VerastService {
  private readonly _http = inject(HttpClient);
  private base_url = environment.VERAST_BASE_URL;

  api_end_points = {
    contact_us: `${this.base_url}contact-us`,
  }

  getContactUs(body: ContactUs) {
    return this._http.post<ContactUs>(this.api_end_points.contact_us, body).pipe(take(1))
  }
}

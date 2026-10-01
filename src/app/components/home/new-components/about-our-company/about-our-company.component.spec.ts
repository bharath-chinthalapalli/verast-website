import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurCompanyComponent } from './about-our-company.component';

describe('AboutOurCompanyComponent', () => {
  let component: AboutOurCompanyComponent;
  let fixture: ComponentFixture<AboutOurCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutOurCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutOurCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

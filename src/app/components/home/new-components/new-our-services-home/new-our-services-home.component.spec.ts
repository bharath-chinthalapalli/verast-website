import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOurServicesHomeComponent } from './new-our-services-home.component';

describe('NewOurServicesHomeComponent', () => {
  let component: NewOurServicesHomeComponent;
  let fixture: ComponentFixture<NewOurServicesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewOurServicesHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOurServicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

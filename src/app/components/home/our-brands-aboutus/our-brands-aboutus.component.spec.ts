import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBrandsAboutusComponent } from './our-brands-aboutus.component';

describe('OurBrandsAboutusComponent', () => {
  let component: OurBrandsAboutusComponent;
  let fixture: ComponentFixture<OurBrandsAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurBrandsAboutusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurBrandsAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

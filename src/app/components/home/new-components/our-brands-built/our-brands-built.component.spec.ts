import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBrandsBuiltComponent } from './our-brands-built.component';

describe('OurBrandsBuiltComponent', () => {
  let component: OurBrandsBuiltComponent;
  let fixture: ComponentFixture<OurBrandsBuiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurBrandsBuiltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurBrandsBuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesWeServeSolutionsComponent } from './industries-we-serve-solutions.component';

describe('IndustriesWeServeSolutionsComponent', () => {
  let component: IndustriesWeServeSolutionsComponent;
  let fixture: ComponentFixture<IndustriesWeServeSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustriesWeServeSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesWeServeSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthStrategyComponent } from './growth-strategy.component';

describe('GrowthStrategyComponent', () => {
  let component: GrowthStrategyComponent;
  let fixture: ComponentFixture<GrowthStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthStrategyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

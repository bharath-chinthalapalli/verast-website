import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyStrategyComponent } from './consultancy-strategy.component';

describe('ConsultancyStrategyComponent', () => {
  let component: ConsultancyStrategyComponent;
  let fixture: ComponentFixture<ConsultancyStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultancyStrategyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultancyStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

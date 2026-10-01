import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueVlaueComponent } from './unique-vlaue.component';

describe('UniqueVlaueComponent', () => {
  let component: UniqueVlaueComponent;
  let fixture: ComponentFixture<UniqueVlaueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniqueVlaueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueVlaueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

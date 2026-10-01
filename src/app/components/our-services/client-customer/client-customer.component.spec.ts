import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCustomerComponent } from './client-customer.component';

describe('ClientCustomerComponent', () => {
  let component: ClientCustomerComponent;
  let fixture: ComponentFixture<ClientCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

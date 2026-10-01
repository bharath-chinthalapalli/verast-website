import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCustomerSubComponent } from './client-customer-sub.component';

describe('ClientCustomerSubComponent', () => {
  let component: ClientCustomerSubComponent;
  let fixture: ComponentFixture<ClientCustomerSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCustomerSubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCustomerSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

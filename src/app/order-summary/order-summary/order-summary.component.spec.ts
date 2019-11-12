import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSummaryComponent } from './order-summary.component';

describe('OrdersComponent', () => {
  let component: OrdersSummaryComponent;
  let fixture: ComponentFixture<OrdersSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

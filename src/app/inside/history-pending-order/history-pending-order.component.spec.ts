import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPendingOrderComponent } from './history-pending-order.component';

describe('HistoryPendingOrderComponent', () => {
  let component: HistoryPendingOrderComponent;
  let fixture: ComponentFixture<HistoryPendingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPendingOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPendingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

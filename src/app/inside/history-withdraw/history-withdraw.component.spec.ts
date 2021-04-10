import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryWithdrawComponent } from './history-withdraw.component';

describe('HistoryWithdrawComponent', () => {
  let component: HistoryWithdrawComponent;
  let fixture: ComponentFixture<HistoryWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryWithdrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

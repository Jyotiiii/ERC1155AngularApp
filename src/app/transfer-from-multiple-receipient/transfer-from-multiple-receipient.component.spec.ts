import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFromMultipleReceipientComponent } from './transfer-from-multiple-receipient.component';

describe('TransferFromMultipleReceipientComponent', () => {
  let component: TransferFromMultipleReceipientComponent;
  let fixture: ComponentFixture<TransferFromMultipleReceipientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferFromMultipleReceipientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFromMultipleReceipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { landRegistrationComponent } from './land-registration.component';

describe('landRegistrationComponent', () => {
  let component: landRegistrationComponent;
  let fixture: ComponentFixture<landRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ landRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(landRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

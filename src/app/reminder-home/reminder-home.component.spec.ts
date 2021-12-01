import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderHomeComponent } from './reminder-home.component';

describe('ReminderHomeComponent', () => {
  let component: ReminderHomeComponent;
  let fixture: ComponentFixture<ReminderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

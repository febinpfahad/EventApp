import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdelComponent } from './eventdel.component';

describe('EventdelComponent', () => {
  let component: EventdelComponent;
  let fixture: ComponentFixture<EventdelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventdelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingEventComponent } from './upcomming-event.component';

describe('UpcommingEventComponent', () => {
  let component: UpcommingEventComponent;
  let fixture: ComponentFixture<UpcommingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcommingEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

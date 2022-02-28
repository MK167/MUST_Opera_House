import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALBUMComponent } from './album.component';

describe('ALBUMComponent', () => {
  let component: ALBUMComponent;
  let fixture: ComponentFixture<ALBUMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALBUMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALBUMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTourComponent } from './video-tour.component';

describe('VideoTourComponent', () => {
  let component: VideoTourComponent;
  let fixture: ComponentFixture<VideoTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEXTEditorPageComponent } from './texteditor-page.component';

describe('TEXTEditorPageComponent', () => {
  let component: TEXTEditorPageComponent;
  let fixture: ComponentFixture<TEXTEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TEXTEditorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TEXTEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

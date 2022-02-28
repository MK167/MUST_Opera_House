import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-texteditor-page',
  templateUrl: './texteditor-page.component.html',
  styleUrls: ['./texteditor-page.component.scss']
})
export class TEXTEditorPageComponent implements OnInit, OnDestroy {
  form! : FormGroup;
  constructor() { }
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];



  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}

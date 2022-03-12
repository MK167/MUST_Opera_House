import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading = new BehaviorSubject(false);

  constructor(private Spinner: NgxSpinnerService) { }

  public ShowSpinner(){
    this.Spinner.show();
  }

  public HideSpinner(){
    this.Spinner.hide();
  }
}

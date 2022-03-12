import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../../Services/slider.service';
import { SLiderDTO } from '../../../Models/SliderDTO';
import { environment } from 'src/environments/environment';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade',
     [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class SliderComponent implements OnInit {

  SLiderDTO: SLiderDTO[] = [];
  current = 0;

  readonly ImagePath = environment.ImagePathUrl; // If You Need Change Image Path Here in environment!

  content!: string;
  url!: string;
  hint!: string;

  FullPath!: string;

  constructor(private SliderService: SliderService) {
     }

  ngOnInit(): void {
    this.GETDate();
    this.sliderTimer();
  }

  sliderTimer() {
    setInterval(() => {
      this.current = ++this.current % this.SLiderDTO.length;
    }, 5000);
  }

  GETDate() {
    this.SliderService.GetAll().subscribe(data=> {
      this.SLiderDTO = data;
      console.log(this.SLiderDTO)
      // this.FullPath = `${this.ImagePath}${data[0].url}`;
      // this.hint = data[0].hint;
      // this.content = data[0].content;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NEWSDTO } from 'src/app/Models/NewsDTO';
import { environment } from 'src/environments/environment';
import { NewsService } from '../../../Services/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  News : NEWSDTO[] =[] ;
  readonly ImagePath = environment.ImagePathUrlNews; // If You Need Change Image Path Here in environment!
  constructor(private NewsService: NewsService) { }

  GETDATA() {
    this.NewsService.GetAll().subscribe((data)=>{
      this.News = data;
      console.log('NEWS', data);
    })
  }
  ngOnInit(): void {
    this.GETDATA();
  }


}

import { Component, OnInit } from '@angular/core';
import { NEWSDTO } from '../../Models/NewsDTO';
import { NewsService } from '../../Services/news.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  News : NEWSDTO[] =[] ;
  readonly ImagePath = environment.ImagePathUrlNews; // If You Need Change Image Path Here in environment!
  constructor(private NewsService: NewsService) { }

  GETDATA() {
    this.NewsService.GetGetTopNews(3).subscribe((data)=>{
      this.News = data;
      console.log('NEWS', data);
    })
  }
  ngOnInit(): void {
    this.GETDATA();
  }

}

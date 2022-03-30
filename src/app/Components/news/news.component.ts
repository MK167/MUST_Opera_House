import { Component, OnInit } from '@angular/core';
import { NEWSDTO } from '../../Models/NewsDTO';
import { NewsService } from '../../Services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  News : NEWSDTO[] =[] ;

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

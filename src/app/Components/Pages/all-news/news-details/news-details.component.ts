import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEWSDTO } from '../../../../Models/NewsDTO';
import { NewsService } from '../../../../Services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
NEWSDTO: NEWSDTO[] = [];
title:string;
content:string;
image:string;
newsID: string;
  constructor(private NewsService: NewsService,
    private router: ActivatedRoute) { }

  GETDATA(){
    this.NewsService.GetByID(this.newsID).subscribe((data)=>{
      this.NEWSDTO = data;
      this.newsID = data.newsID;
      this.title = data.title;
      this.content = data.content;
    })

  }
  ngOnInit(): void {
    this.newsID = this.router.snapshot.params['id'];
    this.GETDATA();
  }

}

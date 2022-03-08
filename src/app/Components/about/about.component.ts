import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../../Services/about-us.service';
import { AboutDTO } from '../../Models/AboutDTO';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  AboutUSDTO :AboutDTO [] = [] ;
  content!: string;
  header!: string;

  constructor(private AboutUsService: AboutUsService) { }

  ngOnInit(): void {
    this.GetData();
  }

  GetData()
  {
    this.AboutUsService.GetAll().subscribe(data =>
      {
      this.AboutUSDTO = data;
      this.header = data[0].header;
      this.content = data[0].content;
      // console.log('AboutUS', this.AboutUSDTO);
      // console.log('header', this.header);
      // console.log('AboutUS', this.content);
      }
    );
  }

}

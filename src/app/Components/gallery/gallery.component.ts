import { Component, OnInit } from '@angular/core';
import { AlbumDTO } from '../../Models/AlbumDTO';
import { AlbumService } from '../../Services/album.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GALLERYComponent implements OnInit {
  Albums: AlbumDTO[] =[];
  constructor(private AlbumService: AlbumService) { }

  GetAlbumData() {
    this.AlbumService.GetAll().subscribe((data) =>{
      this.Albums = data  ;
      console.log('albumData', data);
    })
  }
  ngOnInit(): void {
    this.GetAlbumData();
  }

}

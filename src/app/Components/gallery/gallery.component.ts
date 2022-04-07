import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlbumDTO } from '../../Models/AlbumDTO';
import { AlbumService } from '../../Services/album.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GALLERYComponent implements OnInit {
  Albums: any;
  thumnail: any;
  readonly ImagePath = environment.ImagePathUrlAlbum; // If You Need Change Image Path Here in environment!

  constructor(private AlbumService: AlbumService) { }

  GetAlbumData() {
    this.AlbumService.GetAllAlbumWithImages().subscribe((data) =>{
      this.Albums = data;
      // this.thumnail = this.ImagePath+data[0].thubnail;
      console.log('albumData', data);
      // console.log('albumDataaaa', this.thumnail);
    })
  }
  ngOnInit(): void {
    this.GetAlbumData();
  }

}

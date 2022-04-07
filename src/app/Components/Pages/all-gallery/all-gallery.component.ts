import { Component, OnInit } from '@angular/core';
import { AlbumDTO } from '../../../Models/AlbumDTO';
import { AlbumService } from '../../../Services/album.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-all-gallery',
  templateUrl: './all-gallery.component.html',
  styleUrls: ['./all-gallery.component.scss']
})
export class AllGalleryComponent implements OnInit {

  AlbumDTO: any;
  readonly ImagePath = environment.ImagePathUrlAlbum; // If You Need Change Image Path Here in environment!
  albumID : string;
  title:string;
  description:string;
  constructor(private AlbumService: AlbumService,
    private router: ActivatedRoute) { }

  GETDATA() {
    this.AlbumService.GetByID(this.albumID).subscribe((data)=>{
      this.AlbumDTO = data;
      this.albumID = data.albumID;
      this.title = data.title;
      this.description = data.description;
      console.log('images', data);
    })
  }

  ngOnInit(): void {
    this.albumID = this.router.snapshot.params['id'];
    this.GETDATA();

  }

}

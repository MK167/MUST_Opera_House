import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sponsor } from '../../Models/SponsorDTO';
import { SponsersService } from '../../Services/sponsers.service';

@Component({
  selector: 'app-sponsers',
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.scss']
})
export class SponsersComponent implements OnInit {
Sponser: Sponsor[] = [];
readonly ImagePath = environment.ImagePathUrlSponosr; // If You Need Change Image Path Here in environment!

GETDATA() {
  this.SponsersService.GetAll().subscribe((data)=>{
    this.Sponser = data;
  })
}
  constructor(private SponsersService: SponsersService) { }

  ngOnInit(): void {
    this.GETDATA();
  }

}

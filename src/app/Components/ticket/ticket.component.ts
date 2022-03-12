import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../Services/ticket.service';
import { TicketDTO } from '../../Models/TicketDTO';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  TicketsDTO: TicketDTO [] = [];
  eventTitle!: string;
  eventDate!: string;
  speakerName!: string;
  ActionDate!: any;

  constructor(private TicketService: TicketService) { }


  ngOnInit(): void {
    this.GetData();
  }


  GetData()
  {
    this.TicketService.RetrieveAllEvents().subscribe(data =>
      {
      this.TicketsDTO = data;
      this.eventDate = data[0].eventDate;
      }
    );
  }



}

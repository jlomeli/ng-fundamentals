import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent: any;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
  }

  saveEvent(fomrValues) {
    this.eventService.saveEvent(fomrValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }

}

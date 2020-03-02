import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hype-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.scss'],
})
export class TabPageComponent implements OnInit {

  @Input() title: string;

  @Output() refreshed = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

}

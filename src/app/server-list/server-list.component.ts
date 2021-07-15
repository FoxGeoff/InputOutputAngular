import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  @Input('srvElement') element!: { type: string, name: string; content: string; };

  //servers!: { type: string; name: string; comment: string; };
  //bluePrints!: { type: string; name: string; comment: string; };

  constructor() { }

  ngOnInit(): void {
  }

}

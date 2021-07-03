export class serverElement {
  type!: string;
  name!: string;
  comment!: string;

  constructor(type: string, name: string, comment: string) {
    this.type = type;
    this.name = name;
    this.comment = comment;
  }

}


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputOutputAngular';
  servers!: serverElement[];

  constructor() {
    this.servers = [
      new serverElement("Server", "Dev Server", "This is a test comment"),
      new serverElement("Server", "Dev Server", "This is a test comment"),
      new serverElement("Server", "Dev Server", "This is a test comment")
    ]
  }

}

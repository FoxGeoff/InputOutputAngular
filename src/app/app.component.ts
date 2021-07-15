export class ServerElement {
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
  servers!: ServerElement[];
  bluePrints!: ServerElement[];

  newName = '';
  newComment = '';

  constructor() {
    this.servers = [
      new ServerElement("Server", "Dev Server", "This is a test comment"),
      new ServerElement("Server", "Dev Server", "This is a test comment"),
      new ServerElement("Server", "Dev Server", "This is a test comment")
    ]
      this.bluePrints = [
        new ServerElement("BluePrint", "Dev Server", "This is a test comment"),
        new ServerElement("BluePrint", "Dev Server", "This is a test comment"),
        new ServerElement("BluePrint", "Dev Server", "This is a test comment")
    ]
  }

  onAddServer() {
    this.servers.push(new ServerElement( "Server", this.newName, this.newComment))
  }

  onAddBluePrint() {
    this.bluePrints.push(new ServerElement( "BluePrint", this.newName, this.newComment))
  }

}

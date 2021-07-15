export class ServerElement {
  type!: string;
  name!: string;
  content!: string;

  constructor(type: string, name: string, content: string) {
    this.type = type;
    this.name = name;
    this.content = content;
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
  serverElements!: ServerElement[];
  bluePrintElements!: ServerElement[];

  constructor() { }

  // method #1 for events raised by button click() on child
  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'Server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // method #2 for events raised by button click() on child
  onServerBlueprintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.bluePrintElements.push({
      type: 'BluePrintServer',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

}

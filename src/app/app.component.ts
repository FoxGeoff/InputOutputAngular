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
  serverElements: ServerElement[] = [];

  constructor() {

    // Debug- start test data
    this.serverElements = [
      { type: 'Server', name: 'TestServer', content: 'This is just a name to test' },
      { type: 'BluePrintServer', name: 'Test Blue Server', content: 'This is just a name to test' },
      { type: 'Server', name: 'SecondServer', content: 'Another name to test' }
    ];

  }

  // method #1 for events raised by button click() on child
  onServerAdded(serverData: { serverName: string, serverContent: string }) {

    // Debug
    console.log(`onServerAdded() ${serverData.serverName} and ${serverData.serverContent}`);

    this.serverElements.push({
      type: 'Server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // method #2 for events raised by button click() on child
  onServerBlueprintAdded(serverElements: { serverName: string, serverContent: string }) {

    // Debug
    console.log(`onServerAdded() ${serverElements.serverName} and ${serverElements.serverContent}`);


    this.serverElements.push({
      type: 'BluePrintServer',
      name: serverElements.serverName,
      content: serverElements.serverContent
    });
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // broadcast to parent component, of type EvenEmitter<{...}>() to raise constructor method on the obj
  @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('pbCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  newServerName: string = "";
  newServerComment: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // Task the original method onAddServer() on button click
  onAddServer() {
    //this.serverElements.push(new ServerElement('Server', this.newServerName, this.newServerContent));
    this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerComment });
  }

  // Task the original method onAddBluePrint() on button click
  onAddBluePrint() {
    //this.serverElements.push(new ServerElement('Blue Server', this.newServerName, this.newServerContent));
    this.bluePrintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerComment });
  }

}

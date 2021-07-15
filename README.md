# InputOutputAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Introduction

1. Example app using Angular Material Forms with @Input() and @Output() directives

### Task: Build an html form template

### Task: Add Angular Material

1. run ```ng add @angular/material```
2. Add module Material
3. Restart server
4. Check with Mat Button

### Task: Add Angular flex layout

1. ref <https://github.com/angular/flex-layout>
2. run ```npm i -s @angular/flex-layout @angular/cdk```
3. Restart server

### Task: Add two components Dashboad and ServerList

1. Fex layout ref: <https://www.angularjswiki.com/flexlayout/fxflex/>
2. Use @Input() for passing down a custom property from dashboard to severElement Component.
3. Use @Output() for passing up an event Button (click) ='f(x)'
4. Split into multi components

### Tasks: Get one page form working before split

### Checks - One component

1. app.module has 'FormsModule' ```import { FormsModule } from '@angular/forms';```
2. Add to the form, [(ngModel)] = "propName"

### Checks - Dashboard Component (contains dashboard and server-list)

1. Add Dashboard Component ```@Input('srvElement') element: { name: string, content: string };```

2. Add to App Component ```<app-dashboard></app-dashboard>```
3. Add to App Component ```<app-server-list></app-server-list>```
4. Add to App Component:

````typeScript
  <app-dashboard
    (serverCreated)="onServerAdded($event)"
    (bluePrintCreated)="onServerBlueprintAdded($event)"
  ></app-dashboard>
  ...
  <div class="row">
    <div class="col-xs-12">
      <app-server-list
        *ngFor="let serverElement of serverElements"
        [srvElement]="serverElement"
      ></app-server-list>
    </div>
  ````

```typeScript
// Based on the original button click() methods
// Rename methods

onServerAdded() { }

onServerBlueprintAdded() { }
```

### Notes: Original methods

1. The Parent method onAddServer() is moved to the Parent (app.component) and renamed onServerAdded() (button click event in the parent)
2. The Parent method onAddServer() is moved to the Parent (app.component) and renamed onSerBlueprintAdded() (button click event in the event)

```TypeScript
// In the Parent now new Parent methods (app.component)
  onServerAdded() {
  //   this.servers.push({
  //     name: this.newName,
  //     content: this.newContent
  //   });
  //   this.newName = "";
  //   this.newContent ="";
  }

  onServerBlueprintAdded() {
  //   this.bluePrints.push({
  //     name: this.newName,
  //     content: this.newContent
  //   });
  //   this.newName = "";
  //   this.newContent ="";
  }
  ```

  1. New methods

  ```TypeScript
  export class AppComponent {
  title = 'input-output';

  // now lets use for the collection an example javascript literal
  serverElements = [
    { name: 'Testserver', content: 'test text' }
  ];

  // method #1 for events raised by button click() on child
  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // method #2 for events raised by button click() on child
  onServerBluePrintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

}
```

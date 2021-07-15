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

2. Add to App Component ```

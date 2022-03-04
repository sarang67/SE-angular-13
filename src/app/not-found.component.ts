import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <h1>Sorry , Your page is not found go to <a routerLink="/">Home</a> ?</h1>
  `,
})
export class NotFoundComponent {}

import { Component } from '@angular/core';

@Component({
  template: `
    <div class="col-md-12 position">
        <div class="jumbotron text-center">
          <h1>Need a Survey!</h1>
          <p>Please fill your inputs in the following link. <a routerLink="/personal-info">Survey</a>.</p>
        </div>
    </div>
  `,
  styles: [`
  .position {
    margin-top: 60px;
}
  `]
})
export class HomeComponent {}
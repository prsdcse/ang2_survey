import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">BookBooks.in</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Who we are?</a></li>
              </ul>
            </div>
          </div>
        </nav>        
    `
})
export class HeaderComponent implements OnInit {
    constructor() {}
    
    ngOnInit() {}
}
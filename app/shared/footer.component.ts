import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <p class="text-center footer-text">&copy; 2016. www.bookbooks.in</p>
    `
})
export class FooterComponent implements OnInit {
    constructor() {}
    
    ngOnInit() {}
}
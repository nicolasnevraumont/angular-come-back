import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-come-back';
  navLinks: any[];
  activeLinkIndex = 0; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'My Logs',
            link: '/lists',
            index: 0
        }, {
            label: 'Add log',
            link: '/add',
            index: 1
        }
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
    console.log(this.activeLinkIndex);  
    console.log(this.router.url);  
    if (this.router.url === '/') {
        this.activeLinkIndex = 0;
      }
      else {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === this.router.url));
      }
  });
}
}

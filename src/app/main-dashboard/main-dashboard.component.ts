import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sideNavigation(){
    const body = this.getBody();
    if (body[0].classList.contains('sidenav-toggled')) {
      body[0].classList.remove('sidenav-toggled');
      return;
    }
    body[0].classList.add('sidenav-toggled');
  }

  getBody(){
    return document.getElementsByTagName('body');
  }
}

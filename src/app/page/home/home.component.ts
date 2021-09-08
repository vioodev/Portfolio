import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id: string) {
    let element = document.getElementById(id);
    if (element === null) return;
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}

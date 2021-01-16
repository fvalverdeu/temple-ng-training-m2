import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footer = 'Copyright';
  year = new Date().getFullYear();
  footerLink = 'Academia Temple';

  constructor() { }

  ngOnInit(): void {
  }

}

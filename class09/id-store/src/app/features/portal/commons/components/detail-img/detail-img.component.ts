import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-img',
  templateUrl: './detail-img.component.html',
  styleUrls: ['./detail-img.component.scss']
})
export class DetailImgComponent implements OnInit {

  @Input() images: string;

  constructor() { }

  ngOnInit(): void {
  }

  getImages(): string {
    return `${environment.api}/${this.images}`;
  }

}

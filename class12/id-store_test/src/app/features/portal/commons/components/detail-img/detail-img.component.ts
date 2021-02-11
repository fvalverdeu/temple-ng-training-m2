import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-img',
  templateUrl: './detail-img.component.html',
  styleUrls: ['./detail-img.component.scss']
})
export class DetailImgComponent implements OnInit, OnChanges {

  @ViewChild('slider') sliderImg: ElementRef;
  @ViewChild('down') imgToDown: ElementRef;
  @Input() images: string[];
  srcMain: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.images.currentValue) {
      this.srcMain = this.getImages(this.images[0]);
    } else {
      this.srcMain = '';
    }
  }

  ngOnInit(): void {

  }

  getImages(url: string): string {
    return `${environment.api}/${url}`;
  }

  toogleImg(url: string): void {
    this.srcMain = this.getImages(url);
  }

  up(): void {
    this.sliderImg.nativeElement.scrollTop -= 80;
  }

  down(): void {
    this.sliderImg.nativeElement.scrollTop += 80;
  }

}

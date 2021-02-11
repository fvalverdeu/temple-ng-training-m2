import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImgPipe } from './default-img.pipe';



@NgModule({
  declarations: [DefaultImgPipe],
  exports: [DefaultImgPipe],
  imports: [
    CommonModule
  ]
})
export class DefaultImgModule { }

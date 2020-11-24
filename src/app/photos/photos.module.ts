import { PhotoModule } from './photo/photo.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotosListModule } from './photo-list/photo-list.module';

@NgModule({
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotosListModule
  ],
})
export class PhotosModule { }

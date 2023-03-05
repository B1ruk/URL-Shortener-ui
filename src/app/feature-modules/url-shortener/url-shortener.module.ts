import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlShortenerRoutingModule } from './url-shortener-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { UrlListComponent } from './url-list/url-list.component';

@NgModule({
  declarations: [UrlListComponent],
  imports: [CommonModule, SharedModule, UrlShortenerRoutingModule],
})
export class UrlShortenerModule {}

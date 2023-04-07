import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { SearchComponent } from './components/search/search.component';
import { ReviewComponent } from './components/review/review.component';
import { IconModule } from '@visurel/iconify-angular';

@NgModule({
  declarations: [FeedComponent, SearchComponent, ReviewComponent],
  imports: [CommonModule, FeedRoutingModule, IconModule],
})
export class FeedModule {}

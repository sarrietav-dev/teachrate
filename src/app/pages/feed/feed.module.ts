import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { SearchComponent } from './components/search/search.component';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [FeedComponent, SearchComponent, ReviewComponent],
  imports: [CommonModule, FeedRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeedModule {}

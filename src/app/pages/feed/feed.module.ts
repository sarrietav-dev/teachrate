import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { SearchComponent } from './components/search/search.component';
import { ReviewComponent } from './components/review/review.component';
import { DialogModule } from '@angular/cdk/dialog';
import { CreateReviewDialogComponent } from './components/create-review-dialog/create-review-dialog.component';

@NgModule({
  declarations: [FeedComponent, SearchComponent, ReviewComponent, CreateReviewDialogComponent],
  imports: [CommonModule, FeedRoutingModule, DialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeedModule {}

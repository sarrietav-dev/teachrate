import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [FeedComponent, SearchComponent],
  imports: [CommonModule, FeedRoutingModule],
})
export class FeedModule {}

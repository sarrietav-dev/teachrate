import { Component } from '@angular/core';
import { Review, createFakeReviews } from 'src/models/review';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  reviews: Review[] = createFakeReviews(10);
}

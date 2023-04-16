import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Review, createFakeReviews } from 'src/models/review';
import { CreateReviewDialogComponent } from './components/create-review-dialog/create-review-dialog.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  constructor(private dialog: Dialog) {}

  reviews: Review[] = createFakeReviews(10);

  openCreateReviewDialog() {
    this.dialog.open(CreateReviewDialogComponent);
  }
}

import { Component, Input } from '@angular/core';
import { Review } from 'src/models/review';

@Component({
  selector: 'feed-review',
  templateUrl: './review.component.html',
})
export class ReviewComponent {
  @Input() review!: Review;

  get stars() {
    if (!this.review.rating) return '';
    return Array(this.review.rating).fill('⭐').join('');
  }
}

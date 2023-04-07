import { Component } from '@angular/core';
import searchIcon from '@iconify/icons-material-symbols/search';

@Component({
  selector: 'feed-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchIcon = searchIcon;
}

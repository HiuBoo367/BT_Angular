import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onsearchTextChanged() {}

  updateSearchText(inputEL: HTMLInputElement) {
    // console.log(inputEL.value);
    this.searchText = inputEL.value;
    this.searchTextChanged.emit(this.searchText);
  }

  // updateSearchText(event: any) {
  //  this.searchText = event.target.value;
  // }
}

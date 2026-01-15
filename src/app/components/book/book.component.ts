import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  changeFavorite(): void {
    this.book.favorite = !this.book.favorite;
  }

  book = {
    title: 'As ondas',
    author: 'Virginia Woolf',
    favorite: false,
    image: "https://www.bing.com/th?id=OPHS.Paf8oDCYCsAcow474C474&o=5&pid=21.1&w=140&h=140&qlt=100&dpr=1&o=2"
  };
}

import { Component, input } from '@angular/core';
import { Book } from './book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  book = input.required<Book>();

  changeFavorite(): void {
    this.book().favorite = !this.book().favorite;
  }

 
}

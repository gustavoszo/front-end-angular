import { Component, input } from '@angular/core';
import { Genre } from '../book/book';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-genre',
  imports: [BookComponent],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent {
  genre = input.required<Genre>();
}

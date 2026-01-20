import { Component, input } from '@angular/core';
import { Genre } from '../book/book';
import { BookComponent } from '../book/book.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genre',
  imports: [BookComponent, CommonModule],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent {
  genre = input.required<Genre>();
}

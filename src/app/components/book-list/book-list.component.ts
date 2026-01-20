import { Component, OnInit } from '@angular/core';
import { Book, Genre } from '../book/book';
import { books } from '../../mock-books';
import { GenreComponent } from '../genre/genre.component';

@Component({
  selector: 'app-book-list',
  imports: [GenreComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  
  genres: Genre[] = [];
  booksByGenre: Map<string, Book[]> = new Map<string, Book[]>();

  ngOnInit(): void {
    this.InitializeBooks();
    this.InitializeGenres();
  }

  private InitializeBooks(): void {
    this.booksByGenre = new Map();

    books.forEach((book) => {
      const genreId = book.genre.id
      if(!this.booksByGenre.has(genreId)) {
        this.booksByGenre.set(genreId, [])
      }
      this.booksByGenre.get(genreId)?.push(book)
    })
  }

  private InitializeGenres(): void {
    this.genres = [
      {
          id: 'romance',
          value: "Romance",
          books: this.booksByGenre.get("romance") ?? []
      },
      {
          id: 'misterio',
          value: 'Mistério',
          books: this.booksByGenre.get("misterio") ?? []
      },
      {
          id: 'fantasia',
          value: 'Fantasia',
          books: this.booksByGenre.get("fantasia") ?? []
      },
      {
          id: 'ficcao-cientifica',
          value: 'Ficção Científica',
          books: this.booksByGenre.get("ficcao-cientifica") ?? []
      },
      {
          id: 'tecnicos',
          value: 'Técnicos',
          books: this.booksByGenre.get("tecnicos") ?? []
      },
    ];
  }
}

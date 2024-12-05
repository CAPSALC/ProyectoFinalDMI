import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
    selector: 'app-search-books',
    templateUrl: './search-books.page.html',
    styleUrls: ['./search-books.page.scss'],
    standalone: false
})
export class SearchBooksPage {
  query: string = '';
  books: any[] = [];

  constructor(private booksService: BooksService) {}

  search() {
    if (this.query.trim() === '') return;  // Evita búsquedas vacías

    this.booksService.searchBooks(this.query).subscribe(data => {
      this.books = data.items || [];
    });
  }
}

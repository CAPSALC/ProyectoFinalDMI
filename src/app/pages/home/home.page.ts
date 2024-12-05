import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, GoogleBooksResponse } from '../../models/book.model'; // Asegúrate de importar la interfaz

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: false
})
export class HomePage implements OnInit {
  popularBooks: Book[] = []; // Cambia el tipo a Book[]
  currentPage: number = 0; // Para llevar el control de la página actual
  maxResults: number = 10; // Número de resultados por carga

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPopularBooks(); // Carga los libros al iniciar
  }

  loadPopularBooks() {
    // Usa la API de Google Books, ajusta la consulta según lo que necesites
    this.http.get<GoogleBooksResponse>(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=AIzaSyAMf0NZnx5tX-BW3AH1PHTM4H7AlDSO2Dg&orderBy=newest&maxResults=${this.maxResults}&startIndex=${this.currentPage * this.maxResults}`)
    .subscribe(
        (response) => {
          if (response.items) {
            this.popularBooks.push(...response.items); // Agrega los nuevos libros a la lista existente
          }
        },
        (error) => {
          console.error('Error fetching popular books:', error);
        }
      );
  }

  loadMoreBooksOnScroll(event: any) {
    const scrollTop = event.detail.scrollTop; // Posición del scroll
    const scrollHeight = event.detail.scrollHeight; // Altura total del contenido
    const clientHeight = event.detail.clientHeight; // Altura visible

    // Verifica si el usuario está cerca del final del scroll
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      this.currentPage++; // Incrementa la página actual
      this.loadPopularBooks(); // Carga más libros
    }
  }

  truncateDescription(description: string | undefined, length: number = 70): string {
    if (!description) return ''; // Maneja undefined y strings vacías
    return description.length > length ? description.substring(0, length) + '...' : description;
  }
}

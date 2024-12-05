import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private apiKey = 'AIzaSyAMf0NZnx5tX-BW3AH1PHTM4H7AlDSO2Dg';  // Reemplaza con tu API Key

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${query}&key=${this.apiKey}`);
  }

  getBookById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}?key=${this.apiKey}`);
  }
    // Nuevo método para buscar libros populares
    searchPopularBooks(): Observable<any> {
      return this.http.get(`${this.apiUrl}?q=best+sellers&key=${this.apiKey}`);
    } 
}

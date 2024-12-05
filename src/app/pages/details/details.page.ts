import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models/book.model'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false
})
export class DetailsPage implements OnInit {
  book: Book | undefined; // Propiedad para almacenar los detalles del libro
  loading: boolean = true; // Propiedad para controlar el estado de carga

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id'); // Obtener el ID del libro de la URL
    if (bookId) {
      this.loadBookDetails(bookId);
    } else {
      // Inicializar con un id por defecto (puedes cambiarlo según tus necesidades)
      this.book = { id: '', volumeInfo: {} as Book['volumeInfo'] }; 
    }
  }
  
  

  loadBookDetails(id: string) {
    this.loading = true; // Iniciar la carga
    this.http.get<Book>(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyAMf0NZnx5tX-BW3AH1PHTM4H7AlDSO2Dg`)
      .subscribe(
        (response) => {
          console.log('Book details:', response); // Para depuración
          this.book = response; // Guarda los detalles del libro en la propiedad book
          this.loading = false; // Finalizar la carga
        },
        (error) => {
          console.error('Error fetching book details:', error); // Manejo de errores
          this.loading = false; // Finalizar la carga incluso si hay un error
        }
      );
  }

  getIndustryIdentifiers() {
    if (this.book?.volumeInfo?.industryIdentifiers) {
      return this.book.volumeInfo.industryIdentifiers
        .map(id => id.identifier)
        .join(', ');
    }
    return 'No disponible'; // Manejo de caso donde no hay identificadores
  }
}

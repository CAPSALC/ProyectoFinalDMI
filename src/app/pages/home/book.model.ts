// book.model.ts
export interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      description?: string;
      imageLinks?: {
        thumbnail?: string;
      };
    };
  }
  
  export interface GoogleBooksResponse {
    items: Book[];
  }
  
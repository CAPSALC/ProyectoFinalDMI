export interface VolumeInfo {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
    };
    categories?: string[];
    publishedDate?: string;
    industryIdentifiers?: {
      type: string;
      identifier: string;
    }[];
  }
  
  export interface Book {
    id: string;
    volumeInfo: VolumeInfo;
  }
  
  export interface GoogleBooksResponse {
    items?: Book[];
  }
  
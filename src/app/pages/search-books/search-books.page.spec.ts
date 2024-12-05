import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBooksPage } from './search-books.page';

describe('SearchBooksPage', () => {
  let component: SearchBooksPage;
  let fixture: ComponentFixture<SearchBooksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

let myname = 'Bartek';

interface Book {
  id: number;
  title: string;
  category?: Category;
}

enum Category {
  IT,
  COOK,
}
interface T {
  id: number;
  title: string;
}

type BookId = number | string;

function logId(id: BookId): string {
  if (typeof id === 'string') {
    return id.toLocaleLowerCase();
  }
  return id.toFixed();
}

export class LibraryBook implements Book {
  id: number;
  constructor(public title: string) {}
}

const book1 = { id: 1, title: 'Intro to JS' };
const book2: Book = { id: 1, title: 'Intro to JS' };
const book3: Book = new LibraryBook('Osom Buk');

let bookshelf: Book[] = [book1, book2];

function adder<T>(items: Array<T>, item: T): T[] {
  return [...items, item];
}

adder(bookshelf, book3);

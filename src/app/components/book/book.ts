export interface Book {
    title: string;
    author: string;
    image: string;
    favorite: boolean;
    genre: Genre;
}

export interface Genre {
    id: string;
    value: string;
    books: Book[];
}
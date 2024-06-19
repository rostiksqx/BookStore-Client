import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface Props {
  books: Book[];
  handleDelete: (id: string) => void;
  handleOpen: (book: Book) => void;
}

export const Books = ({ books, handleDelete, handleOpen }: Props) => {
  return (
    <div className="cards">
      {books.map((book: Book) => (
        <Card
          key={book.id}
          title={book.title}
        >
          <p>{book.description}</p>
          <div className="card_buttons">
            <Button onClick={() => handleOpen(book)} style={{ flex: 1 }}>
              Edit
            </Button>
            <Button
              onClick={() => handleDelete(book.id)}
              style={{ flex: 1 }}
            >
              Delete
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

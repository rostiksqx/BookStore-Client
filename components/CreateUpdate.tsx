import { BookRequest } from "@/app/api/books";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import Modal from "antd/es/modal/Modal";


interface Props {
  mode: Mode;
  values: Book;
  isModalOpen: boolean;
  handleCancel: () => void;
  handleCreate: (request: BookRequest) => void;
  handleUpdate: (id: string, request: BookRequest) => void;
}

export enum Mode {
  Create,
  Update,
}

export const CreateUpdateBook = ({
  mode,
  values,
  isModalOpen,
  handleCancel,
  handleCreate,
  handleUpdate,
}: Props) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(1);

  useEffect(() => {
    setTitle(values.title);
    setDescription(values.description);
    setPrice(values.price);
  }, [values]);

  const handleOnOk = async () => {
    const bookRequest = { title, description, price };

    mode == Mode.Create
      ? handleCreate(bookRequest)
      : handleUpdate(values.id, bookRequest);
  };

  return (
    <Modal
      title={mode === Mode.Create ? "Create Book" : "Update Book"}
      open={isModalOpen}
      onOk={handleOnOk}
      onCancel={handleCancel}
      cancelText={"Cancel"}
    >
      <div className="book_modal">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <Input
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Price"
        />
      </div>
    </Modal>
  );
};

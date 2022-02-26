import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Book } from '../../types/Book';
import { Review } from './Review';
import { SelectBook } from './SelectBook';

type Props = {
  isOpen: boolean;
  onOpen: Function;
  onClose: Function;
};

export const AddNewModal: React.FC<Props> = ({ isOpen, onOpen, onClose }) => {
  const [selectedBook, setSelectedBook] = useState<Book>();
  const closeDialog = () => {
    onClose();
    setSelectedBook(undefined);
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      size='4xl'
      isOpen={isOpen}
      onClose={closeDialog}
    >
      <ModalOverlay />
      <ModalContent height='60%'>
        <ModalHeader>新しく読んだ本を登録します</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {!selectedBook ? (
            <SelectBook setSelectedBook={setSelectedBook} />
          ) : (
            <Review
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

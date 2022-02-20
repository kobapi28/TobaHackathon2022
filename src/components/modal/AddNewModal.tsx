import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Review } from './Review';
import { SelectBook } from './SelectBook';

type Props = {
  isOpen: boolean;
  onOpen: Function;
  onClose: Function;
};

export const AddNewModal: React.FC<Props> = ({ isOpen, onOpen, onClose }) => {
  const [isFirstPage, setIsFirstPage] = useState<boolean>(true);

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={() => onClose()}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>新しく読んだ本を登録します</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {isFirstPage ? <SelectBook /> : <Review />}
        </ModalBody>

        <Button onClick={() => setIsFirstPage(false)}>
          これが本になります
        </Button>
      </ModalContent>
    </Modal>
  );
};

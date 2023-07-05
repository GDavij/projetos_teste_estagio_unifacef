import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { TEditora } from '../../../models/data/editora';

interface EditEditoraModalProps {
  isOpen: boolean;
  onClose: () => void;
  editoraSelected: TEditora;
}
export function EditEditoraModal({
  isOpen,
  onClose,
  editoraSelected,
}: EditEditoraModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {editoraSelected ? (
            <div>
              <h1>{editoraSelected.id}</h1>
            </div>
          ) : (
            <div>
              <h1>Could not Load Editora</h1>
            </div>
          )}
        </ModalBody>

        <ModalFooter>YO</ModalFooter>
      </ModalContent>
    </Modal>
  );
}

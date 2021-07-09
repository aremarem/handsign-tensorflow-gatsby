import React from 'react'
import Sign from '../images/Sign.svg';
import {
    Text,
    Button,
    Image,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
Link,
} from '@chakra-ui/react'

export default function About() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <div>
            <Button onClick={onOpen} colorScheme="green">Petunjuk</Button>
            
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Petunjuk</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Text fontSize="sm">Cara menggunakan media ini adalah sebagi berikut: <br></br>
              1. Buka media pada browser anda<br></br>
              2. Tunggu hingga kamera On dan arahkan tangan sesuai perintah yang ada pada layar<br></br>
              3. Buat gerakan sesuai dengan gambar yang ada di atas.<br></br>
         </Text>
                     
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
    )
}
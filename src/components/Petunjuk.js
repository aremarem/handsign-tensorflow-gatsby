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
            <Button onClick={onOpen} colorScheme="green">Tentang</Button>
            
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tentang</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Text fontSize="sm">MEDIA PENGENALAN BAHASA ISYARAT<br></br>
              Media ini adalah sarana belajar siswa yang dikemas dengan lebih modern dan menarik dengan memanfaatkan AI untuk mendeteksi huruf yang diinginkan oleh pengguna.<br></br>
              <br></br>
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
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
            <Button onClick={onOpen} colorScheme="orange">Bantuan</Button>
            
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sistem Isyarat Bahasa Indonesia (SIBI)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Text fontSize="sm">Sistem Isyarat Bahasa Indonesia (SIBI) yang dibakukan itu merupakan salah satu media yang membantu komunikasi sesama kaum tunarungu di dalam masyarakat yang lebih luas. <br></br>
         Berikut adalah daftar Gerak Tangan untuk huruf alphabet SIBI.</Text>
          <Image src={Sign}/>
          <Text fontSize="sm">Illustrasi tersebut berdasarkan pada Yayasan Peduli Kasih ABK</Text>
            
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
    )
}

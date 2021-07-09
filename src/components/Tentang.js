import React from 'react'
import Sign from '../images/Sign.svg';
import tentang from '../images/tentang.svg'
import herdin from '../images/herdin.jpg'
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
            <Button onClick={onOpen} colorScheme="purple">Tentang</Button>
            
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bio Kreator</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Image src={herdin}/><br></br>
              <Text fontSize="sm">Nama : Herdin Didi Hardianto<br></br>
              NIM : A710170104<br></br>
              Alamat : Wonogiri<br></br>
              E-mail : herdinhardianto@gmail.com<br></br>
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

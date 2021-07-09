import React from 'react'
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
            <Button onClick={onOpen} colorScheme="yellow">Tujuan</Button>
            
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tujuan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Text fontSize="sm">Tujuan dibuatnya media ini adalah sebagi berikut: <br></br>
              1. Sebagai media belajar siswa.<br></br>
              2. Sebagai pendamping dalam proses pengenalan hurus SIBI.<br></br>
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
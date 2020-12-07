import React, { useState } from "react";
import Modal from "react-modal";
import {
  Container,
  ButtonList,
  ButtonModal,
  Title,
  Input,
  ButtonContainer,
  customStyles,
  ModalHeader,
  Text,
  TextClose,
  ModalContent,
} from "./styled";

function NavBar() {
  const [value, setValue] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleInput = (event) => setValue(event.target.value);
  return (
    <Container>
      <ButtonList onClick={handleOpen}>+ New Playlist</ButtonList>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <ModalHeader>
          <Text>Create Playlist</Text>
          <TextClose onClick={handleClose}>x</TextClose>
        </ModalHeader>
        <ModalContent>
          <Title>Name</Title>
          <Input
            type="text"
            name="playlist"
            id="playlist"
            value={value}
            onChange={handleInput}
          ></Input>
        </ModalContent>
        <ButtonContainer>
          <ButtonModal type="submit">Create</ButtonModal>
        </ButtonContainer>
      </Modal>
    </Container>
  );
}
export default NavBar;

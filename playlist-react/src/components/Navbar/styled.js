import styled from "styled-components";

export const Container = styled.div`
  width: 15%;
  height: 100vh;
  background-color: gray;
  margin: 0;
  padding: 0;
`;
export const ButtonList = styled.button`
  width: 100%;
  background-color: gray;
  border: none;
  cursor: pointer;
  font-size: 30px;
  color: #ffffff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#c5d9d6",
    borderColor: "black",
    width: "30%",
    height: "30%",
    fontSize: "30px",
  },
};
export const Form = styled.form`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  a {
    margin-top: 5px;
    font-size: 16px;
  }
`;
export const Input = styled.input`
  width: 50%;
  margin: 10px 0;
  padding: 5px 10px;
  height: 20px;
  border: solid 3px black;
  outline: none;
  &:focus {
    border: 1px solid #0c1737;
  }
`;
export const ButtonModal = styled.button`
  height: 45px;
  width: 110px;
  background-color: #8dc5c6;
  margin-top: 3rem;
  border: 0;
  color: black;
  font-size: 20px;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #77c3c7;
  }
`;

export const Title = styled.span`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.5rem;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Text = styled.h2`
  margin: 0;
`;
export const TextClose = styled.h2`
  margin: 0 1rem 0 0;
  cursor: pointer;
`;
export const ModalContent = styled.div`
  margin-top: 2rem;
`;

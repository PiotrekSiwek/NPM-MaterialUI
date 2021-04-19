import styled from "styled-components";

export const LibraryInput = styled.input`
  border: 2px grey solid;
  border-radius: 8px;
  width: 35%;
  background-color: white;
  outline: none;
  padding: 10px;
  margin: 10px 10px 20px;

  ::placeholder {
    font-style: italic;
  }
`

export const MessageWrapper = styled.div`
  color: orangered;
  text-align: center;
  padding-bottom: 20px;
  font-style: italic;
  font-family: Calibri, sans-serif;
`
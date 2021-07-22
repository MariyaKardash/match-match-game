import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background-color: #6a67fc73;
  color: black;
  font-size: 20px;
  padding: 10px 15px;
  margin: 2px;
  border: 1px solid black;
  border-radius: 6px;
`;

export const StyledInput = styled.input`
  padding: 15px 30px;
  margin: 10px;
  outline: none;
  border: 1px solid black;
  border-radius: 6px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 10px 30px;
  border-bottom: 6px double white;
`;

export const Img = styled.img`
  border-radius: 50px;
  border: 2px solid white;
  max-width: 60px;
`;

export const H1 = styled.h1`
  color: white;
`;

export const PageName = styled.h1`
  text-align: center;
  margin-top: 10%;
`;

export const CardDiv = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
`;
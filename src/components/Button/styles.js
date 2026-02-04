import styled from 'styled-components';

export const ContainerButton = styled.button`
  font-family: 'Road Rage', sans-serif;
  font-size: 30px;
  cursor: pointer;
  color: #fff;
  height: 52px;
  width: 350px;
  background: #8758a6;
  border-radius: 5px;
  border: 0;

  &:hover {
    background: #6f357c;
    color: #000000ff;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
  }
`;

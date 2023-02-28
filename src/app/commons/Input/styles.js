import styled from "styled-components";

export const SCInput = styled.input`
  background: #e5e5e5;
  border-radius: 5px;
  padding: 11px 20px;
  margin-top: 10px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  border: none;
  outline: none;
  &:focus {
    background: #e5e5e5;
    outline: none;
    border: none;
    box-shadow: unset !important;
  }
`;

import styled from 'styled-components';

const StyledCustomInput = styled.input`
  width: 320px;
  height: 40px;
  border: 1px solid #00000033;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: blue;
  }
`;

const StyledLabel = styled.p`
  margin: 5px;
`;

const StyledError = styled.p`
  color: #b00000;
  margin-top: 5px;
  width: 250px;
  font-size: 10px;
  text-wrap: wrap;
`;

export { StyledCustomInput, StyledLabel, StyledError };

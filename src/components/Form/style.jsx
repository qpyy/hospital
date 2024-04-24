import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  width: 400px;
  height: auto;
  min-height: 400px;
  margin: 20px;
  background-color: #fff;
  padding-bottom: 10px;
`;

const StyledTitle = styled.p`
  margin: 25px;
  font-size: 36px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  padding: 5px;
  text-decoration: none;
  color: #000000;

  &:visited {
    color: #000000;
  }

  &:hover {
    color: #000000b3;
  }
`;

const StyledButtonWrapper = styled.div`
  margin-left: 130px;
  margin-top: 20px;
`;

export { 
  StyledForm, 
  StyledTitle, 
  StyledLink, 
  StyledButtonWrapper 
};

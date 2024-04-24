import styled from 'styled-components';

const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 120px;
  z-index: 10;
  -webkit-box-shadow: 0px 10px 8px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 10px 8px 2px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 10px 8px 2px rgba(0, 0, 0, 0.4);
`;

const StyledImage = styled.img`
  position: fixed;
  top: 20px;
  left: 36px;
`;

export { StyledHeader, StyledImage };

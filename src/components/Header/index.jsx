import Logo from '../../images/Logo.png';
import { StyledHeader, StyledImage } from './style';

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <StyledImage src={Logo} alt="Logo..." />
      <h1>{title}</h1>
    </StyledHeader>
  );
};

export default Header;

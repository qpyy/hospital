import CustomButton from '../UI/CustomButton';
import {
  StyledForm,
  StyledTitle,
  StyledButtonWrapper,
  StyledLink,
} from './style';

const Form = ({
  children,
  destination,
  formTitle,
  formLinkText,
  buttonText,
  submitAction,
}) => {
  return (
    <StyledForm onSubmit={submitAction}>
      <StyledTitle>{formTitle}</StyledTitle>
      {children}
      <StyledButtonWrapper>
        <CustomButton buttonText={buttonText} type="submit" />
      </StyledButtonWrapper>
      <StyledLink to={destination}>{formLinkText}</StyledLink>
    </StyledForm>
  );
};

export default Form;

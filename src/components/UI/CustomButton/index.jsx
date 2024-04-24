import StyledCustomButton from './style';

const CustomButton = ({ buttonText, type }) => {
  return (
    <StyledCustomButton type={type}> 
      {buttonText} 
    </StyledCustomButton>
  );
};

export default CustomButton;
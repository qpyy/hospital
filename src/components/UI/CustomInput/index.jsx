import { StyledCustomInput, StyledLabel, StyledError } from './style';

const CustomInput = ({
  inputLabel,
  errorMessage,
  name,
  handleChangeInput,
  placeholderValue,
}) => {
  return (
    <div>
      <StyledLabel htmlFor={name}>{inputLabel}</StyledLabel>
      <StyledCustomInput
        placeholder={placeholderValue}
        name={name}
        onChange={handleChangeInput}
      />
      <StyledError>{errorMessage}</StyledError>
    </div>
  );
};

export default CustomInput;

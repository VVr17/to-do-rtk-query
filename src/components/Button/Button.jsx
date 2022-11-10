import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({
  type = 'button',
  onClick,
  children,
  selected = false,
  disabled = false,
}) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      selected={selected}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

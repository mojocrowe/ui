import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CirclularProgress from "@mui/material/CircularProgress";

interface IProps extends MuiButtonProps {
  loading?: boolean;
}

const StyledButton = styled(MuiButton, {})<IProps>(({ theme }) => ({}));

const Button: React.FC<IProps> = (props) => {
  return <StyledButton {...props}>{props.loading ? <CirclularProgress size={20} /> : props.children}</StyledButton>;
};

export default Button;

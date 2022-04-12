import CirclularProgress from "@mui/material/CircularProgress";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface IProps extends MuiButtonProps {
  loading?: boolean;
}

const StyledButton = styled(
  MuiButton,
  {}
)<IProps>(({ theme }) => ({
  boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.15)",
  padding: theme.spacing(0, 2),
}));

const Button: React.FC<IProps> = (props) => {
  return (
    <>
      <StyledButton
        {...props}
        disableRipple
        endIcon={props.loading === false ? props.endIcon : undefined}
        startIcon={props.loading === false ? props.startIcon : undefined}
      >
        {props.loading ? <CirclularProgress color="inherit" size={16} /> : props.children}
      </StyledButton>
    </>
  );
};

export default Button;

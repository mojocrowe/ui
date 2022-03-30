import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

type ButtonProps = MuiButtonProps;

export const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({}));

export default Button;

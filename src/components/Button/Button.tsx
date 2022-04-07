import CirclularProgress from "@mui/material/CircularProgress";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface IProps extends MuiButtonProps {
  loading?: boolean;
}

const StyledButton = styled(MuiButton, {})<IProps>(({ theme }) => ({}));

const CircularProgressSizes = new Map<string | undefined, number>([
  ["small", 22],
  ["medium", 24],
  ["large", 26],
]);

const Button: React.FC<IProps> = (props) => {
  return (
    <>
      <StyledButton
        {...props}
        startIcon={props.loading === false ? props.startIcon : undefined}
        endIcon={props.loading === false ? props.endIcon : undefined}
      >
        {props.loading ? (
          <CirclularProgress color="inherit" size={CircularProgressSizes.get(props.size)} />
        ) : (
          props.children
        )}
      </StyledButton>
    </>
  );
};

export default Button;

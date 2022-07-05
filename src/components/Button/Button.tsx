import CirclularProgress from "@mui/material/CircularProgress";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import React from "react";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    tertiary: true;
  }
}

interface IProps extends MuiButtonProps {
  loading?: boolean;
}

const Button = <C extends React.ElementType>(props: MuiButtonProps<C, { component?: C }> & IProps) => {
  return (
    <MuiButton
      {...props}
      disableRipple
      endIcon={props.loading === false ? props.endIcon : undefined}
      startIcon={props.loading === false ? props.startIcon : undefined}
      sx={{ boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.15)", padding: "0px 16px" }}
    >
      {props.loading ? <CirclularProgress color="inherit" size={16} /> : props.children}
    </MuiButton>
  );
};

export default Button;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#303232",
    },
    secondary: {
      main: "#FFE3B9",
    },
  },
  typography: {
    h1Primary: {
      fontFamily: "Futura Condensed Extrabold",
      fontWeight: 900,
      fontSize: "72px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    h2Primary: {
      fontFamily: "Futura Condensed Extrabold",
      fontWeight: 900,
      fontSize: "52px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    h3Primary: {
      fontFamily: "Futura Condensed Extrabold",
      fontWeight: 900,
      fontSize: "44px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    h4PrimaryLarge: {
      fontFamily: "Futura Condensed Extrabold",
      fontWeight: 900,
      fontSize: "24px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    h4PrimaryHero: {
      fontFamily: "Futura Condensed Book",
      fontSize: "24px",
      lineHeight: "100%",
      textTransform: "uppercase",
    },
    h4PrimarySmall: {
      fontFamily: "Futura Condensed Medium",
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "28.8px",
      textTransform: "uppercase",
    },
    h5PrimaryLarge: {
      fontFamily: "Futura Condensed Extrabold",
      fontWeight: 900,
      fontSize: "20px",
      lineHeight: "24px",
    },
    h5PrimarySmall: {
      fontFamily: "Futura Condensed Medium",
      fontWeight: 900,
      fontSize: "20px",
      lineHeight: "24px",
    },
    h6PrimaryLarge: {
      fontFamily: "Futura Condensed ExtraBold",
      fontWeight: 900,
      fontSize: "16px",
      lineHeight: "24px",
    },
    h6PrimarySmall: {
      fontFamily: "Futura Condensed Medium",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
    },
    h6PrimaryAction: {
      fontFamily: "Futura Condensed Medium",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "16px",
      textTransform: "uppercase",
    },
    body1Primary: {
      fontFamily: "Futura Medium",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16px",
    },
    body2Primary: {
      fontFamily: "Futura Medium",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16px",
    },
    paragraph1Primary: {
      fontFamily: "Futura Book",
      fontSize: "16px",
      lineHeight: "20px",
    },
    paragraph2Primary: {
      fontFamily: "Futura Book",
      fontSize: "12px",
      lineHeight: "16px",
    },

    h1Secondary: { fontFamily: "New York Extra Large", fontWeight: 600, fontSize: "64px", lineHeight: "72px" },
    h2Secondary: { fontFamily: "New York Extra Large", fontWeight: 400, fontSize: "44px", lineHeight: "52px" },
    h3Secondary: { fontFamily: "New York Extra Large", fontWeight: 400, fontSize: "32px", lineHeight: "36px" },
    h4Secondary: { fontFamily: "New York Extra Large", fontWeight: 400, fontSize: "24px", lineHeight: "28px" },
    h5Secondary: { fontFamily: "New York Extra Large", fontWeight: 400, fontSize: "20px", lineHeight: "24px" },
    h6Secondary: { fontFamily: "New York Extra Large", fontWeight: 500, fontSize: "16px", lineHeight: "20px" },
    body1Secondary: { fontFamily: "New York Extra Large", fontWeight: 400, fontSize: "12px", lineHeight: "16px" },
    body2Secondary: { fontFamily: "New York Extra Large", fontWeight: 400, fontSize: "10px", lineHeight: "12px" },
  },
});

export default theme;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "",
      main: "#FFE3B9",
      dark: "",
    },
    secondary: {
      light: "",
      main: "#303232",
      dark: "",
    },
    error: {
      light: "",
      main: "#DA0101",
      dark: "",
    },
    warning: {
      light: "",
      main: "#FFA9A9",
      dark: "",
    },
    text: {
      primary: "#000000",
      secondary: "#8A8A8A",
      disabled: "#DADADA",
    },
  },

  typography: {
    fontFamily: ["FuturaBook", "sans-serif"].join(","),
    h1Primary: {
      fontFamily: "FuturaCondensedExtraBold",
      fontWeight: 900,
      fontSize: "72px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    h2Primary: {
      fontFamily: "FuturaCondensedExtraBold",
      fontSize: "52px",
      fontWeight: 900,
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    h3Primary: {
      fontFamily: "FuturaCondensedExtraBold",
      fontSize: "44px",
      fontWeight: 900,
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    h4PrimaryBold: {
      fontFamily: "FuturaCondensedExtraBold",
      fontSize: "24px",
      fontWeight: 900,
      lineHeight: "120%",
      textTransform: "uppercase",
    },

    h4PrimaryRegular: {
      fontFamily: "FuturaCondensedMedium",
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "28.8px",
      textTransform: "uppercase",
    },
    h4PrimaryHero: { fontFamily: "FuturaBook", fontSize: "24px", lineHeight: "100%", textTransform: "uppercase" },
    h5PrimaryBold: { fontWeight: 900, fontFamily: "FuturaCondensedExtraBold", fontSize: "20px", lineHeight: "24px" },
    h5PrimaryRegular: { fontFamily: "FuturaCondensedMedium", fontSize: "20px", lineHeight: "24px" },
    h6PrimaryBold: { fontWeight: 900, fontFamily: "FuturaCondensedExtraBold", fontSize: "16px", lineHeight: "24px" },
    h6PrimaryRegular: { fontFamily: "FuturaCondensedMedium", fontSize: "16px", lineHeight: "20px" },
    h6PrimaryAction: {
      fontFamily: "FuturaCondensedMedium",
      fontSize: "16px",
      lineHeight: "16px",
      textTransform: "uppercase",
    },
    subtitle1Primary: { fontFamily: "FuturaMedium", fontWeight: 500, fontSize: "14px", lineHeight: "16px" },
    subtitle2Primary: { fontFamily: "FuturaMedium", fontWeight: 500, fontSize: "14px", lineHeight: "16px" },
    body1Primary: { fontFamily: "FuturaBook", fontSize: "16px", lineHeight: "20px" },
    body2Primary: { fontFamily: "FuturaBook", fontSize: "12px", lineHeight: "16px" },
    h1Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 600, fontSize: "64px", lineHeight: "72px" },
    h2Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 400, fontSize: "44px", lineHeight: "52px" },
    h3Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 400, fontSize: "32px", lineHeight: "36px" },
    h4Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 400, fontSize: "24px", lineHeight: "28px" },
    h5Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 400, fontSize: "20px", lineHeight: "24px" },
    h6Secondary: { fontFamily: "NewYorkExtraLargeMedium", fontWeight: 500, fontSize: "16px", lineHeight: "20px" },
    body1Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 400, fontSize: "12px", lineHeight: "16px" },
    body2Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 400, fontSize: "10px", lineHeight: "12px" },
    h1Tertiary: { fontFamily: "TimberWolf", fontWeight: 400, fontSize: "52px", lineHeight: "64px" },
    h2Tertiary: { fontFamily: "TimberWolf", fontWeight: 400, fontSize: "44px", lineHeight: "48px" },
    h3Tertiary: { fontFamily: "TimberWolf", fontWeight: 400, fontSize: "36px", lineHeight: "44px" },
    h4Tertiary: { fontFamily: "TimberWolf", fontWeight: 400, fontSize: "32px", lineHeight: "36px" },
    h5Tertiary: { fontFamily: "TimberWolf", fontWeight: 400, fontSize: "28px", lineHeight: "36px" },
    h6Tertiary: { fontFamily: "TimberWolf", fontWeight: 400, fontSize: "24px", lineHeight: "28px" },
    body1Tertiary: { fontFamily: "TimberWolf", fontWeight: 400, fontSize: "20px", lineHeight: "24px" },
    body2Tertiary: { fontFamily: "TimberWolf", fontWeight: 400, fontSize: "16px", lineHeight: "20px" },
  },
});

export default theme;

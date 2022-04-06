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
      fontSize: "72px",
      fontWeight: 900,
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
    h4Primary: {
      fontFamily: "FuturaCondensedExtraBold",
      fontSize: "24px",
      fontWeight: 900,
      lineHeight: "120%",
      textTransform: "uppercase",
    },

    h4PrimaryMedium: {
      fontFamily: "FuturaCondensedMedium",
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "28.8px",
      textTransform: "uppercase",
    },
    // h4PrimaryHero: { fontFamily: "FuturaBook", fontSize: "24px", lineHeight: "100%", textTransform: "uppercase" },
    h5Primary: { fontFamily: "FuturaCondensedExtraBold", fontSize: "20px", fontWeight: 900, lineHeight: "24px" },
    h5PrimaryMedium: { fontFamily: "FuturaCondensedMedium", fontSize: "20px", lineHeight: "24px" },
    h6Primary: { fontFamily: "FuturaCondensedExtraBold", fontSize: "16px", fontWeight: 900, lineHeight: "24px" },
    h6PrimaryMedium: { fontFamily: "FuturaCondensedMedium", fontSize: "16px", lineHeight: "20px" },
    // h6PrimaryAction: {
    //   fontFamily: "FuturaCondensedMedium",
    //   fontSize: "16px",
    //   letterSpacing: "-0.4px",
    //   lineHeight: "16px",
    //   textTransform: "uppercase",
    // },
    body1Primary: { fontFamily: "FuturaBook", fontSize: "16px", letterSpacing: "-0.4px", lineHeight: "20px" },
    body2Primary: { fontFamily: "FuturaBook", fontSize: "12px", letterSpacing: "-0.4px", lineHeight: "16px" },
    body3Primary: { fontFamily: "FuturaBook", fontSize: "10px", letterSpacing: "-0.4px", lineHeight: "12px" },
    h1Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontSize: "64px", fontWeight: 600, lineHeight: "72px" },
    h2Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontSize: "44px", fontWeight: 400, lineHeight: "52px" },
    h3Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontSize: "32px", fontWeight: 400, lineHeight: "36px" },
    h4Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontSize: "24px", fontWeight: 400, lineHeight: "28px" },
    h5Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontSize: "20px", fontWeight: 400, lineHeight: "24px" },
    h6Secondary: { fontFamily: "NewYorkExtraLargeMedium", fontSize: "16px", fontWeight: 500, lineHeight: "20px" },
    body1Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontSize: "12px", fontWeight: 400, lineHeight: "16px" },
    body2Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontSize: "10px", fontWeight: 400, lineHeight: "12px" },
    h1Tertiary: { fontFamily: "TimberWolf", fontSize: "52px", fontWeight: 400, lineHeight: "64px" },
    h2Tertiary: { fontFamily: "TimberWolf", fontSize: "44px", fontWeight: 400, lineHeight: "48px" },
    h3Tertiary: { fontFamily: "TimberWolf", fontSize: "36px", fontWeight: 400, lineHeight: "44px" },
    h4Tertiary: { fontFamily: "TimberWolf", fontSize: "32px", fontWeight: 400, lineHeight: "36px" },
    h5Tertiary: { fontFamily: "TimberWolf", fontSize: "28px", fontWeight: 400, lineHeight: "36px" },
    h6Tertiary: { fontFamily: "TimberWolf", fontSize: "24px", fontWeight: 400, lineHeight: "28px" },
    body1Tertiary: { fontFamily: "TimberWolf", fontSize: "20px", fontWeight: 400, lineHeight: "24px" },
    body2Tertiary: { fontFamily: "TimberWolf", fontSize: "16px", fontWeight: 400, lineHeight: "20px" },
  },
});

export default theme;

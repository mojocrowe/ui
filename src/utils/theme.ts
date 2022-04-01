import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFE3B9",
    },
    secondary: {
      main: "#303232",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Futura';
          font-style: normal;
          font-weight: 900;
          font-display: swap;
          src: url("../assets/fonts/FuturaCondensedExtraBold.tff") format(truetype);
        }
      `,
    },
  },
  typography: {
    h1Primary: {
      fontFamily: "Futura, sans-serif",
      fontSize: "72px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    h2Primary: {
      fontSize: "52px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    h3Primary: {
      fontSize: "44px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    h4PrimaryLarge: {
      fontSize: "24px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    h4PrimaryHero: {
      fontSize: "24px",
      lineHeight: "100%",
      textTransform: "uppercase",
    },
    h4PrimarySmall: {
      fontSize: "24px",
      lineHeight: "28.8px",
      textTransform: "uppercase",
    },
    h5PrimaryLarge: {
      fontSize: "20px",
      lineHeight: "24px",
    },
    h5PrimarySmall: {
      fontSize: "20px",
      lineHeight: "24px",
    },
    h6PrimaryLarge: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    h6PrimarySmall: {
      fontSize: "16px",
      lineHeight: "20px",
    },
    h6PrimaryAction: {
      fontSize: "16px",
      lineHeight: "16px",
      textTransform: "uppercase",
    },
    body1Primary: {
      fontFamily: "FuturaMedium",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16px",
    },
    body2Primary: {
      fontFamily: "FuturaMedium",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16px",
    },
    paragraph1Primary: {
      fontFamily: "FuturaCondensedBook",
      fontSize: "16px",
      lineHeight: "20px",
    },
    paragraph2Primary: {
      fontFamily: "FuturaCondensedBook",
      fontSize: "12px",
      lineHeight: "16px",
    },

    h1Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 600, fontSize: "64px", lineHeight: "72px" },
    h2Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 400, fontSize: "44px", lineHeight: "52px" },
    h3Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 400, fontSize: "32px", lineHeight: "36px" },
    h4Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 400, fontSize: "24px", lineHeight: "28px" },
    h5Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 400, fontSize: "20px", lineHeight: "24px" },
    h6Secondary: { fontFamily: "NewYorkExtraLargeMedium", fontWeight: 500, fontSize: "16px", lineHeight: "20px" },
    body1Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 400, fontSize: "12px", lineHeight: "16px" },
    body2Secondary: { fontFamily: "NewYorkExtraLargeRegular", fontWeight: 400, fontSize: "10px", lineHeight: "12px" },
  },
});

export default theme;

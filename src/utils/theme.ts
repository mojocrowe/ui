import { createTheme } from "@mui/material/styles";
import FuturaCondensedExtraBold from "../assets/fonts/FuturaCondensedExtraBold.ttf";
import FuturaCondensedMedium from "../assets/fonts/FuturaCondensedMedium.ttf";
import FuturaMedium from "../assets/fonts/FuturaMedium.ttf";
import FuturaBook from "../assets/fonts/FuturaCondensedBook.ttf";
import NewYorkExtraLargeMedium from "../assets/fonts/NewYorkExtraLargeMedium.ttf";
import NewYorkExtraLargeRegular from "../assets/fonts/NewYorkExtraLargeRegular.ttf";

const newYorkExtraLargeMedium = {
  fontFamily: "NewYorkExtraLargeMedium",
  fontDisplay: "swap",
  src: `
    local('NewYorkExtraLargeMedium'),
    url(${NewYorkExtraLargeMedium}) format('truetype')
  `,
};

const newYorkExtraLargeRegular = {
  fontFamily: "NewYorkExtraLargeRegular",
  fontDisplay: "swap",
  src: `
    local('NewYorkExtraLargeRegular'),
    url(${NewYorkExtraLargeRegular}) format('truetype')
  `,
};
const futuraCondensedExtraBold = {
  fontFamily: "FuturaCondensedExtraBold",
  fontDisplay: "swap",
  src: `
    local('FuturaCondensedExtraBold'),
    url(${FuturaCondensedExtraBold}) format('truetype')
  `,
};

const futuraCondensedMedium = {
  fontFamily: "FuturaCondensedMedium ",
  fontDisplay: "swap",
  src: `
    local('FuturaCondensedMedium '),
    url(${FuturaCondensedMedium}) format('truetype')
  `,
};

const futuraMedium = {
  fontFamily: "FuturaMedium",
  fontDisplay: "swap",
  src: `
    local('FuturaMedium'),
    url(${FuturaMedium}) format('truetype')
  `,
};

const futuraBook = {
  fontFamily: "FuturaBook",
  fontDisplay: "swap",
  src: `
    local('FuturaBook'),
    url(${FuturaBook}) format('truetype')
  `,
};

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
      styleOverrides: {
        "@font-face": [
          futuraCondensedExtraBold,
          futuraCondensedMedium,
          futuraBook,
          futuraMedium,
          newYorkExtraLargeRegular,
          newYorkExtraLargeMedium,
        ],
      },
    },
  },
  typography: {
    fontFamily: [
      "FuturaCondensedExtraBold",
      "FuturaCondensedMedium",
      "FuturaMedium",
      "FuturaBook",
      "NewYorkExtraLargeRegular",
      "NewYorkExtraLargeMedium",
    ].join(","),
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
    h4PrimaryLarge: {
      fontFamily: "FuturaCondensedExtraBold",
      fontSize: "24px",
      fontWeight: 900,
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    h4PrimaryHero: {
      fontFamily: "FuturaCondensedMedium",
      fontSize: "24px",
      lineHeight: "100%",
      textTransform: "uppercase",
    },
    h4PrimarySmall: {
      fontFamily: "FuturaCondensedMedium",
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "28.8px",
      textTransform: "uppercase",
    },
    h5PrimaryLarge: {
      fontWeight: 900,
      fontFamily: "FuturaCondensedExtraBold",
      fontSize: "20px",
      lineHeight: "24px",
    },
    h5PrimarySmall: {
      fontFamily: "FuturaCondensedMedium",
      fontSize: "20px",
      lineHeight: "24px",
    },
    h6PrimaryLarge: {
      fontWeight: 900,
      fontFamily: "FuturaCondensedExtraBold",
      fontSize: "16px",
      lineHeight: "24px",
    },
    h6PrimarySmall: {
      fontFamily: "FuturaCondensedMedium",
      fontSize: "16px",
      lineHeight: "20px",
    },
    h6PrimaryAction: {
      fontFamily: "FuturaCondensedMedium",
      fontSize: "16px",
      lineHeight: "16px",
      textTransform: "uppercase",
    },
    subtitle1Primary: {
      fontFamily: "FuturaMedium",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16px",
    },
    subtitle2Primary: {
      fontFamily: "FuturaMedium",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16px",
      // needs a underline text-transform or to be a link coponent instead
    },
    body1Primary: {
      fontFamily: "FuturaBook",
      fontSize: "16px",
      lineHeight: "20px",
    },
    body2Primary: {
      fontFamily: "FuturaBook",
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

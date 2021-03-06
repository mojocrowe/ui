import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    700?: string;
    600?: string;
    500?: string;
    400?: string;
    300?: string;
    200?: string;
    100?: string;
    50?: string;
    25?: string;
    0?: string;
  }

  interface SimplePaletteColorOptions {
    700?: string;
    600?: string;
    500?: string;
    400?: string;
    300?: string;
    200?: string;
    100?: string;
    50?: string;
    25?: string;
    0?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      0: "#FFF8EE",
      25: "#FFEFD8",
      50: "#FFE3B9",
      100: "#FFD79A",
      200: "#FFCE85",
      300: "#FFC56D",
      400: "#FFB84C",
      500: "#FFAE33",
      600: "#FFA41A",
      700: "#F0970F",
      contrastText: "#000000",
      main: "#FFC56D",
    },
    secondary: {
      0: "#FFFFFF",
      25: "#EEEEEF",
      50: "#E5E5E5",
      100: "#DADADA",
      200: "#CCCCCC",
      300: "#A1A1A1",
      400: "#8A8A8A",
      500: "#535555",
      600: "#303232",
      700: "#000000",
      contrastText: "#FFFFFF",
      main: "#000000",
    },
    tertiary: {
      contrastText: "#000000",
      main: "#FFFFFF",
    },
    error: {
      0: "#FFEBEB",
      25: "#FFA9A9",
      50: "#FE7676",
      100: "#FE4343",
      200: "#FE1010",
      300: "#DA0101",
      400: "#C30000",
      500: "#AC0202",
      600: "#900404",
      700: "#5E0202",
      main: "#DA0101",
    },
    success: {
      0: "#EBEFFF",
      25: "#D1DBFF",
      50: "#B8C7FF",
      100: "#9EB3FF",
      200: "#85A0FF",
      300: "#7291FF",
      400: "#5278FF",
      500: "#3864FF",
      600: "#1F50FF",
      700: "#073EFF",
      main: "#073EFF",
    },
    text: {
      disabled: "#DADADA",
      primary: "#000000",
      secondary: "#8A8A8A",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid inherit",
        },
        sizeSmall: {
          borderRadius: "16px",
          height: "32px",
          minWidth: "54px",
        },
        sizeMedium: {
          borderRadius: "22px",
          height: "44px",
          minWidth: "54px",
        },
        sizeLarge: {
          borderRadius: "26px",
          height: "52px",
          minWidth: "54px",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Futura", "Arial Black", "sans-serif"].join(","),
    button: {
      fontFamily: "FuturaCondensed",
      fontSize: "16px",
      letterSpacing: "-0.4px",
      lineHeight: "16px",
      textTransform: "uppercase",
    },
    futuraTitleLarge: {
      fontFamily: "FuturaBold",
      fontSize: "72px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    futuraTitleMedium: {
      fontFamily: "FuturaBold",
      fontSize: "52px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    futuraTitleSmall: {
      fontFamily: "FuturaBold",
      fontSize: "44px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    futuraTitleXSmall: {
      fontFamily: "FuturaBold",
      fontSize: "32px",
      lineHeight: "120%",
      textTransform: "uppercase",
    },
    futuraHeadingLarge: {
      fontFamily: "FuturaCondensed",
      fontSize: "24px",
      lineHeight: "120%",
    },
    futuraHeadingMedium: {
      fontFamily: "FuturaCondensed",
      fontSize: "20px",
      lineHeight: "120%",
    },
    futuraHeadingSmall: {
      fontFamily: "FuturaCondensed",
      fontSize: "16px",
      lineHeight: "120%",
    },
    futuraHeadingXSmall: {
      fontFamily: "FuturaCondensed",
      fontSize: "12px",
      lineHeight: "120%",
    },
    futuraParagraphLarge: {
      fontFamily: "FuturaBook",
      fontSize: "20px",
      letterSpacing: "-0.4px",
      lineHeight: "24px",
    },
    futuraParagraphMedium: {
      fontFamily: "FuturaBook",
      fontSize: "16px",
      letterSpacing: "-0.4px",
      lineHeight: "20px",
    },
    futuraParagraphSmall: {
      fontFamily: "FuturaBook",
      fontSize: "12px",
      letterSpacing: "-0.4px",
      lineHeight: "16px",
    },
    futuraParagraphXSmall: {
      fontFamily: "FuturaBook",
      fontSize: "10px",
      letterSpacing: "-0.4px",
      lineHeight: "12px",
    },
    futuraLabelLarge: {
      fontFamily: "FuturaCondensed",
      fontSize: "24px",
      letterSpacing: "-0.4px",
      lineHeight: "24px",
      textTransform: "uppercase",
    },
    futuraLabelMedium: {
      fontFamily: "FuturaCondensed",
      fontSize: "20px",
      letterSpacing: "-0.4px",
      lineHeight: "20px",
      textTransform: "uppercase",
    },
    futuraLabelSmall: {
      fontFamily: "FuturaCondensed",
      fontSize: "16px",
      letterSpacing: "-0.4px",
      lineHeight: "16px",
      textTransform: "uppercase",
    },
    futuraLabelXSmall: {
      fontFamily: "FuturaCondensed",
      fontSize: "12px",
      letterSpacing: "-0.4px",
      lineHeight: "12px",
      textTransform: "uppercase",
    },

    newYorkHeadingLarge: {
      fontFamily: "NewYork",
      fontSize: "64px",
      fontWeight: 400,
      lineHeight: "72px",
    },
    newYorkHeadingMedium: {
      fontFamily: "NewYork",
      fontSize: "44px",
      fontWeight: 400,
      lineHeight: "52px",
    },
    newYorkHeadingSmall: {
      fontFamily: "NewYork",
      fontSize: "32px",
      fontWeight: 400,
      lineHeight: "36px",
    },
    newYorkHeadingXSmall: {
      fontFamily: "NewYork",
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "28px",
    },
    newYorkParagraphLarge: {
      fontFamily: "NewYork",
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    newYorkParagraphMedium: {
      fontFamily: "NewYork",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    newYorkParagraphSmall: {
      fontFamily: "NewYork",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    newYorkParagraphXSmall: {
      fontFamily: "NewYork",
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "12px",
    },

    timberwolfHeadingLarge: {
      fontFamily: "TimberWolf",
      fontSize: "52px",
      fontWeight: 400,
      lineHeight: "64px",
    },
    timberwolfHeadingMedium: {
      fontFamily: "TimberWolf",
      fontSize: "44px",
      fontWeight: 400,
      lineHeight: "48px",
    },
    timberwolfHeadingSmall: {
      fontFamily: "TimberWolf",
      fontSize: "36px",
      fontWeight: 400,
      lineHeight: "44px",
    },
    timberwolfHeadingXSmall: {
      fontFamily: "TimberWolf",
      fontSize: "32px",
      fontWeight: 400,
      lineHeight: "36px",
    },
    timberwolfParagraphLarge: {
      fontFamily: "TimberWolf",
      fontSize: "28px",
      fontWeight: 400,
      lineHeight: "36px",
    },
    timberwolfParagraphMedium: {
      fontFamily: "TimberWolf",
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "28px",
    },
    timberwolfParagraphSmall: {
      fontFamily: "TimberWolf",
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    timberwolfParagraphXSmall: {
      fontFamily: "TimberWolf",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "20px",
    },
  },
});

export default theme;

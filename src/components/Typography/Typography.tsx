import MuiTypography, { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// declaring modules for custom typography variants
declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1Primary: React.CSSProperties;
    h2Primary: React.CSSProperties;
    h3Primary: React.CSSProperties;
    h4PrimaryLarge: React.CSSProperties;
    h4PrimarySmall: React.CSSProperties;
    h4PrimaryHero: React.CSSProperties;
    h5PrimaryLarge: React.CSSProperties;
    h5PrimarySmall: React.CSSProperties;
    h6PrimaryLarge: React.CSSProperties;
    h6PrimarySmall: React.CSSProperties;
    h6PrimaryAction: React.CSSProperties;
    body1Primary: React.CSSProperties;
    body2Primary: React.CSSProperties;
    paragraph1Primary: React.CSSProperties;
    paragraph2Primary: React.CSSProperties;

    h1Secondary: React.CSSProperties;
    h2Secondary: React.CSSProperties;
    h3Secondary: React.CSSProperties;
    h4Secondary: React.CSSProperties;
    h5Secondary: React.CSSProperties;
    h6Secondary: React.CSSProperties;
    body1Secondary: React.CSSProperties;
    body2Secondary: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1Primary: React.CSSProperties;
    h2Primary: React.CSSProperties;
    h3Primary: React.CSSProperties;
    h4PrimaryLarge: React.CSSProperties;
    h4PrimarySmall: React.CSSProperties;
    h4PrimaryHero: React.CSSProperties;
    h5PrimaryLarge: React.CSSProperties;
    h5PrimarySmall: React.CSSProperties;
    h6PrimaryLarge: React.CSSProperties;
    h6PrimarySmall: React.CSSProperties;
    h6PrimaryAction: React.CSSProperties;
    body1Primary: React.CSSProperties;
    body2Primary: React.CSSProperties;
    paragraph1Primary: React.CSSProperties;
    paragraph2Primary: React.CSSProperties;

    h1Secondary: React.CSSProperties;
    h2Secondary: React.CSSProperties;
    h3Secondary: React.CSSProperties;
    h4Secondary: React.CSSProperties;
    h5Secondary: React.CSSProperties;
    h6Secondary: React.CSSProperties;
    body1Secondary: React.CSSProperties;
    body2Secondary: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1Primary: true;
    h2Primary: true;
    h3Primary: true;
    h4PrimaryLarge: true;
    h4PrimarySmall: true;
    h4PrimaryHero: true;
    h5PrimaryLarge: true;
    h5PrimarySmall: true;
    h6PrimaryLarge: true;
    h6PrimarySmall: true;
    h6PrimaryAction: true;
    body1Primary: true;
    body2Primary: true;
    paragraph1Primary: true;
    paragraph2Primary: true;

    h1Secondary: true;
    h2Secondary: true;
    h3Secondary: true;
    h4Secondary: true;
    h5Secondary: true;
    h6Secondary: true;
    body1Secondary: true;
    body2Secondary: true;
  }
}

type TypographyProps = MuiTypographyProps;

const Typography = styled(MuiTypography)<TypographyProps>(({ theme }) => ({}));

export default Typography;

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

// type props
type TypographyProps = MuiTypographyProps;

// styled version of mui typography
const StyledTypography = styled(MuiTypography, {})<TypographyProps>(({ theme }) => ({}));

// returns react fc with props and variants mapped to the right elements
const Typography: React.FC<TypographyProps> = (props) => {
  return (
    <StyledTypography
      {...props}
      variantMapping={{
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1: "p",
        body2: "p",
        inherit: "p",

        h1Primary: "h1",
        h2Primary: "h2",
        h3Primary: "h3",
        h4PrimaryLarge: "h4",
        h4PrimarySmall: "h4",
        h4PrimaryHero: "h4",
        h5PrimaryLarge: "h5",
        h5PrimarySmall: "h5",
        h6PrimaryLarge: "h6",
        h6PrimarySmall: "h6",
        h6PrimaryAction: "h6",
        body1Primary: "p",
        body2Primary: "p",
        paragraph1Primary: "p",
        paragraph2Primary: "p",

        h1Secondary: "h1",
        h2Secondary: "h2",
        h3Secondary: "h3",
        h4Secondary: "h4",
        h5Secondary: "h5",
        h6Secondary: "h6",
        body1Secondary: "p",
        body2Secondary: "p",
      }}
    />
  );
};

export default Typography;

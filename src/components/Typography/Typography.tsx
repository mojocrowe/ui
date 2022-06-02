import MuiTypography, { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1Primary: React.CSSProperties;
    h1Secondary: React.CSSProperties;
    h1Tertiary: React.CSSProperties;
    h2Primary: React.CSSProperties;
    h2Secondary: React.CSSProperties;
    h2Tertiary: React.CSSProperties;
    h3Primary: React.CSSProperties;
    h3Secondary: React.CSSProperties;
    h3Tertiary: React.CSSProperties;
    h4Primary: React.CSSProperties;
    h4PrimaryMedium: React.CSSProperties;
    h4Secondary: React.CSSProperties;
    h4Tertiary: React.CSSProperties;
    h5Primary: React.CSSProperties;
    h5PrimaryMedium: React.CSSProperties;
    h5Secondary: React.CSSProperties;
    h5Tertiary: React.CSSProperties;
    h6Primary: React.CSSProperties;
    h6PrimaryMedium: React.CSSProperties;
    h6Secondary: React.CSSProperties;
    h6Tertiary: React.CSSProperties;
    body1Primary: React.CSSProperties;
    body2Primary: React.CSSProperties;
    body3Primary: React.CSSProperties;
    body1Secondary: React.CSSProperties;
    body2Secondary: React.CSSProperties;
    body1Tertiary: React.CSSProperties;
    body2Tertiary: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1Primary?: React.CSSProperties;
    h1Secondary?: React.CSSProperties;
    h1Tertiary?: React.CSSProperties;
    h2Primary?: React.CSSProperties;
    h2Secondary?: React.CSSProperties;
    h2Tertiary?: React.CSSProperties;
    h3Primary?: React.CSSProperties;
    h3Secondary?: React.CSSProperties;
    h3Tertiary?: React.CSSProperties;
    h4Primary?: React.CSSProperties;
    h4PrimaryMedium?: React.CSSProperties;
    h4Secondary?: React.CSSProperties;
    h4Tertiary?: React.CSSProperties;
    h5Primary?: React.CSSProperties;
    h5PrimaryMedium?: React.CSSProperties;
    h5Secondary?: React.CSSProperties;
    h5Tertiary?: React.CSSProperties;
    h6Primary?: React.CSSProperties;
    h6PrimaryMedium?: React.CSSProperties;
    h6Secondary?: React.CSSProperties;
    h6Tertiary?: React.CSSProperties;
    body1Primary?: React.CSSProperties;
    body2Primary?: React.CSSProperties;
    body3Primary?: React.CSSProperties;
    body1Secondary?: React.CSSProperties;
    body2Secondary?: React.CSSProperties;
    body1Tertiary?: React.CSSProperties;
    body2Tertiary?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1Primary: true;
    h1Secondary: true;
    h1Tertiary: true;
    h2Primary: true;
    h2Secondary: true;
    h2Tertiary: true;
    h3Primary: true;
    h3Secondary: true;
    h3Tertiary: true;
    h4Primary: true;
    h4PrimaryMedium: true;
    h4Secondary: true;
    h4Tertiary: true;
    h5Primary: true;
    h5PrimaryMedium: true;
    h5Secondary: true;
    h5Tertiary: true;
    h6Primary: true;
    h6PrimaryMedium: true;
    h6Secondary: true;
    h6Tertiary: true;
    body1Primary: true;
    body2Primary: true;
    body3Primary: true;
    body1Secondary: true;
    body2Secondary: true;
    body1Tertiary: true;
    body2Tertiary: true;
  }
}

type IProps = MuiTypographyProps;

const StyledTypography = styled(MuiTypography, {})<IProps>(({ theme }) => ({}));

const Typography: React.FC<IProps> = (props) => {
  return (
    <StyledTypography
      {...props}
      variantMapping={{
        h1Primary: "h1",
        h1Secondary: "h1",
        h1Tertiary: "h1",
        h2Primary: "h2",
        h2Secondary: "h2",
        h2Tertiary: "h2",
        h3Primary: "h3",
        h3Secondary: "h3",
        h3Tertiary: "h3",
        h4Primary: "h4",
        h4PrimaryMedium: "h4",
        h4Secondary: "h4",
        h4Tertiary: "h4",
        h5Primary: "h5",
        h5PrimaryMedium: "h5",
        h5Secondary: "h5",
        h5Tertiary: "h5",
        h6Primary: "h6",
        h6PrimaryMedium: "h6",
        h6Secondary: "h6",
        h6Tertiary: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1Primary: "p",
        body2Primary: "p",
        body3Primary: "p",
        body1Secondary: "p",
        body2Secondary: "p",
        body1Tertiary: "p",
        body2Tertiary: "p",
      }}
    />
  );
};

export default Typography;

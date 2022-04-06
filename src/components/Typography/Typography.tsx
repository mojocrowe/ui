import MuiTypography, { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface IProps extends MuiTypographyProps {
  variantMapping?: {
    h1Primary: "h1Primary";
    h1Secondary: string;
    h1Tertiary: string;
    h2Primary: string;
    h2Secondary: string;
    h2Tertiary: string;
    h3Primary: string;
    h3Secondary: string;
    h3Tertiary: string;
    h4Primary: string;
    h4PrimaryMedium: string;
    h4Secondary: string;
    h4Tertiary: string;
    h5Primary: string;
    h5PrimaryMedium: string;
    h5Secondary: string;
    h5Tertiary: string;
    h6Primary: string;
    h6PrimaryMedium: string;
    h6Secondary: string;
    h6Tertiary: string;
    subtitle1: string;
    subtitle2: string;
    body1Primary: string;
    body2Primary: string;
    body3Primary: string;
    body1Secondary: string;
    body2Secondary: string;
    body1Tertiary: string;
    body2Tertiary: string;
  };
}

const StyledTypography = styled(MuiTypography, {})<IProps>(({ theme }) => ({}));

const Typography: React.FC<IProps> = (props) => {
  return (
    <StyledTypography
      {...props}
      variantMapping={{
        h1: "h1",
        h1Primary: "h1",
        h1Secondary: "h1",
        h1Tertiary: "h1",
        h2: "h2",
        h2Primary: "h2",
        h2Secondary: "h2",
        h2Tertiary: "h2",
        h3: "h3",
        h3Primary: "h3",
        h3Secondary: "h3",
        h3Tertiary: "h3",
        h4: "h4",
        h4Primary: "h4",
        h4PrimaryMedium: "h4",
        h4Secondary: "h4",
        h4Tertiary: "h4",
        h5: "h5",
        h5Primary: "h5",
        h5PrimaryMedium: "h5",
        h5Secondary: "h5",
        h5Tertiary: "h5",
        h6: "h6",
        h6Primary: "h6",
        h6PrimaryMedium: "h6",
        h6Secondary: "h6",
        h6Tertiary: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1: "p",
        body2: "p",
        body1Primary: "p",
        body2Primary: "p",
        body3Primary: "p",
        body1Secondary: "p",
        body2Secondary: "p",
        body1Tertiary: "p",
        body2Tertiary: "p",
        inherit: "p",
      }}
    />
  );
};

export default Typography;

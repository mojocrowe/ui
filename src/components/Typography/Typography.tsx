import MuiTypography, { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

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

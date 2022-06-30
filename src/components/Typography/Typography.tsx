import MuiTypography, { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    futuraTitleLarge: React.CSSProperties;
    futuraTitleMedium: React.CSSProperties;
    futuraTitleSmall: React.CSSProperties;
    futuraTitleXSmall: React.CSSProperties;
    futuraHeadingLarge: React.CSSProperties;
    futuraHeadingMedium: React.CSSProperties;
    futuraHeadingSmall: React.CSSProperties;
    futuraHeadingXSmall: React.CSSProperties;
    futuraParagraphLarge: React.CSSProperties;
    futuraParagraphMedium: React.CSSProperties;
    futuraParagraphSmall: React.CSSProperties;
    futuraParagraphXSmall: React.CSSProperties;
    futuraLabelLarge: React.CSSProperties;
    futuraLabelMedium: React.CSSProperties;
    futuraLabelSmall: React.CSSProperties;
    futuraLabelXSmall: React.CSSProperties;

    newYorkHeadingLarge: React.CSSProperties;
    newYorkHeadingMedium: React.CSSProperties;
    newYorkHeadingSmall: React.CSSProperties;
    newYorkHeadingXSmall: React.CSSProperties;
    newYorkParagraphLarge: React.CSSProperties;
    newYorkParagraphMedium: React.CSSProperties;
    newYorkParagraphSmall: React.CSSProperties;
    newYorkParagraphXSmall: React.CSSProperties;

    timberwolfHeadingLarge: React.CSSProperties;
    timberwolfHeadingMedium: React.CSSProperties;
    timberwolfHeadingSmall: React.CSSProperties;
    timberwolfHeadingXSmall: React.CSSProperties;
    timberwolfParagraphLarge: React.CSSProperties;
    timberwolfParagraphMedium: React.CSSProperties;
    timberwolfParagraphSmall: React.CSSProperties;
    timberwolfParagraphXSmall: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    futuraTitleLarge: React.CSSProperties;
    futuraTitleMedium: React.CSSProperties;
    futuraTitleSmall: React.CSSProperties;
    futuraTitleXSmall: React.CSSProperties;
    futuraHeadingLarge: React.CSSProperties;
    futuraHeadingMedium: React.CSSProperties;
    futuraHeadingSmall: React.CSSProperties;
    futuraHeadingXSmall: React.CSSProperties;
    futuraParagraphLarge: React.CSSProperties;
    futuraParagraphMedium: React.CSSProperties;
    futuraParagraphSmall: React.CSSProperties;
    futuraParagraphXSmall: React.CSSProperties;
    futuraLabelLarge: React.CSSProperties;
    futuraLabelMedium: React.CSSProperties;
    futuraLabelSmall: React.CSSProperties;
    futuraLabelXSmall: React.CSSProperties;

    newYorkHeadingLarge: React.CSSProperties;
    newYorkHeadingMedium: React.CSSProperties;
    newYorkHeadingSmall: React.CSSProperties;
    newYorkHeadingXSmall: React.CSSProperties;
    newYorkParagraphLarge: React.CSSProperties;
    newYorkParagraphMedium: React.CSSProperties;
    newYorkParagraphSmall: React.CSSProperties;
    newYorkParagraphXSmall: React.CSSProperties;

    timberwolfHeadingLarge: React.CSSProperties;
    timberwolfHeadingMedium: React.CSSProperties;
    timberwolfHeadingSmall: React.CSSProperties;
    timberwolfHeadingXSmall: React.CSSProperties;
    timberwolfParagraphLarge: React.CSSProperties;
    timberwolfParagraphMedium: React.CSSProperties;
    timberwolfParagraphSmall: React.CSSProperties;
    timberwolfParagraphXSmall: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    futuraTitleLarge: true;
    futuraTitleMedium: true;
    futuraTitleSmall: true;
    futuraTitleXSmall: true;
    futuraHeadingLarge: true;
    futuraHeadingMedium: true;
    futuraHeadingSmall: true;
    futuraHeadingXSmall: true;
    futuraParagraphLarge: true;
    futuraParagraphMedium: true;
    futuraParagraphSmall: true;
    futuraParagraphXSmall: true;
    futuraLabelLarge: true;
    futuraLabelMedium: true;
    futuraLabelSmall: true;
    futuraLabelXSmall: true;

    newYorkHeadingLarge: true;
    newYorkHeadingMedium: true;
    newYorkHeadingSmall: true;
    newYorkHeadingXSmall: true;
    newYorkParagraphLarge: true;
    newYorkParagraphMedium: true;
    newYorkParagraphSmall: true;
    newYorkParagraphXSmall: true;

    timberwolfHeadingLarge: true;
    timberwolfHeadingMedium: true;
    timberwolfHeadingSmall: true;
    timberwolfHeadingXSmall: true;
    timberwolfParagraphLarge: true;
    timberwolfParagraphMedium: true;
    timberwolfParagraphSmall: true;
    timberwolfParagraphXSmall: true;
  }
}

type IProps = MuiTypographyProps;

const StyledTypography = styled(MuiTypography, {})<IProps>(({ theme }) => ({})) as typeof Typography;

const Typography: React.FC<IProps> = (props) => {
  return <StyledTypography {...props} />;
};

export default Typography;

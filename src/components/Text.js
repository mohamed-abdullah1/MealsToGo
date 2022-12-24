import styled from "styled-components/native";
const defaultText = (theme) => `
    font-family : ${theme?.fonts.body};
    font-size : ${theme?.fontSizes.body};
    font-weight:${theme?.fontWeights.regular};
    flex-wrap:wrap;
    margin:0;
    padding:0;
`;

const error = (theme) => `
    color:${theme.colors.text.error};
`;
const body = (theme) => `
    font-size:${theme.fontSizes.body};
`;
const hint = (theme) => `
font-size: ${theme.fontSizes.body};
`;
const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;
const variants = {
  body,
  label,
  caption,
  error,
  hint,
};
export const Text = styled.Text`
  ${({ theme }) => defaultText(theme)};
  ${({ variant, theme }) => variants[variant](theme)};
`;
Text.defaultProps = {
  variant: "body",
};

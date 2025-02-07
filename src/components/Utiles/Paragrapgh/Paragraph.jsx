// components/Paragraph.js
import styled from 'styled-components';

// Define the styled paragraph component
const StyledParagraph = styled.p`
  /* Base styles */
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || 'normal'};
  text-transform: ${({ textTransform }) => textTransform || 'none'};

  /* Additional custom styles */
  ${({ customStyles }) => customStyles}
`;

// Define the Paragraph component
const Paragraph = ({
  children,
  margin,
  padding,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  fontFamily,
  backgroundColor,
  letterSpacing,
  textTransform,
  customStyles,
  ...props
}) => {
  return (
    <StyledParagraph
      margin={margin}
      padding={padding}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      textAlign={textAlign}
      fontFamily={fontFamily}
      backgroundColor={backgroundColor}
      letterSpacing={letterSpacing}
      textTransform={textTransform}
      customStyles={customStyles}
      {...props}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
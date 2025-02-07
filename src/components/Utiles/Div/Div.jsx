// components/Div.js
import styled from 'styled-components';

// Define the styled div component
const StyledDiv = styled.div`
  /* Add your base styles here */
  box-sizing: border-box;
  margin: 0;
  padding: ${({ padding }) => padding || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  color: ${({ color }) => color || 'inherit'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  gap: ${({ gap }) => gap || '0'};

  /* Add any additional styles or overrides here */
  ${({ customStyles }) => customStyles}
`;

// Define the Div component with TypeScript-like prop types (optional)
const Div = ({
  children,
  padding,
  backgroundColor,
  color,
  width,
  height,
  border,
  borderRadius,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  customStyles,
  ...props
}) => {
  return (
    <StyledDiv
      padding={padding}
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      customStyles={customStyles}
      {...props}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
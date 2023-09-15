import styled from "styled-components";

interface ButtonProps {
  $width?: number;
  $size?: number;
  $weight?: string;
  $border?: boolean;
  $color?: string;
  $background?: string;
  $display?: boolean;
  $disable?: boolean;
  $minWidth?: number;
  $maxWidth?: number;
}

const Button = styled.button<ButtonProps>`
  min-height: var(--button-height-1);
  border-radius: var(--button-border);

  border: ${({ $border }) => ($border ? "var(--border-button-1)" : "none")};

  width: ${({ $width }) =>
    $width ? `var(--button-width-${$width})` : "var(--button-width-1)"};

  min-width: ${({ $minWidth }) =>
    $minWidth ? `var(--button-width-${$minWidth})` : "none"};

  max-width: ${({ $maxWidth }) =>
    $maxWidth ? `var(--button-width-${$maxWidth})` : "none"};

  background-color: ${({ $background }) =>
    $background ? `var(--${$background})` : "var(--color-black)"};

  color: ${({ $color }) =>
    $color ? `var(--${$color})` : "var(--color-white)"};

  font-size: ${({ $size }) =>
    $size ? `var(--font-body-${$size})` : "var(--font-body-1)"};

  font-weight: ${({ $weight }) =>
    $weight ? `var(--${$weight})` : "var(button-width-5)"};

  @media (min-width: 1024px) {
    display: ${({ $display }) => ($display ? "none" : "block")};
  }

  cursor: ${({ $disable }) => ($disable ? "none" : "pointer")};
`;

export { Button };

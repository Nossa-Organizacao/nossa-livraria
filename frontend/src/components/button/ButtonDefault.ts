import styled from "styled-components";

interface ButtonProps {
  $width?: number;
  $size?: number;
  $weight?: string;
  $border?: boolean;
  $borderColor?: string;
  $color?: string;
  $background?: string;
  $display?: boolean;
  $hoverBackground?: string;
  $hoverColor?: string;
  $hoverBorder?: string;
  $disable?: boolean;
  $minWidth?: number;
  $maxWidth?: number;
}

const Button = styled.button<ButtonProps>`
  min-height: var(--button-height-1);
  border-radius: var(--button-border);
  transition: 300ms;

  border: solid
    ${({ $border }) => ($border ? "var(--border-button-1)" : "none")};

  border-color: ${({ $borderColor }) =>
    $borderColor ? `var(--color-${$borderColor})` : "var(--color-white)"};

  width: ${({ $width }) =>
    $width ? `var(--button-width-${$width})` : "var(--button-width-1)"};

  min-width: ${({ $minWidth }) =>
    $minWidth ? `var(--button-width-${$minWidth})` : "auto"};

  max-width: ${({ $maxWidth }) =>
    $maxWidth ? `var(--button-width-${$maxWidth})` : "none"};

  background-color: ${({ $background }) =>
    $background ? `var(--color-${$background})` : "var(--color-black)"};

  color: ${({ $color }) =>
    $color ? `var(--${$color})` : "var(--color-white)"};

  font-size: ${({ $size }) =>
    $size ? `var(--font-body-${$size})` : "var(--font-body-1)"};

  font-weight: ${({ $weight }) =>
    $weight ? `var(--font-weight-${$weight})` : "var(--font-weight-5)"};


cursor: ${({ $disable }) => ($disable ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${({ $hoverBackground }) =>
      $hoverBackground ? `var(--color-${$hoverBackground})` : "var(--color-black)"};

    color: ${({ $hoverColor }) =>
      $hoverColor ? `var(--color-${$hoverColor})` : "var(--color-white)"};

    /* border-color: ${({ $hoverBorder }) => ($hoverBorder ? "var(--color-${hoverBorder})" : "var(--color-white)")}; */
  }

  /* @media (min-width: 1024px) {
    display: ${({ $display }) => ($display ? "none" : "block")};
  } */
`;


export { Button };

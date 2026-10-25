import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ $bg: string; $disabled: boolean }>`
  display: block;
  width: 100%;
  max-width: 320px;
  height: auto;
  background-color: ${(p) => (p.$disabled ? '#cccccc' : p.$bg)};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  filter: ${(p) => (p.$disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${(p) => (p.$disabled ? 0.6 : 1)};
  border-radius: 6px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  backgroundColor = '#e6f0ff',
  disabled = false,
}) => (
  <StyledImg src={src} alt={alt} $bg={backgroundColor} $disabled={disabled} />
);

export default Img;
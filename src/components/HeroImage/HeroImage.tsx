import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const Hero = styled.div<{ $bg: string; $src: string; $disabled: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 300px;
  background-color: ${(p) => (p.$disabled ? '#cccccc' : p.$bg)};
  background-image: url("${(p) => p.$src}");
  background-size: cover;
  background-position: center;
  color: #ffffff;
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  filter: ${(p) => (p.$disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${(p) => (p.$disabled ? 0.6 : 1)};
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 600px) {
    min-height: 200px;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  margin: 0 0 0.5rem 0;
  font-size: 2.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  title,
  subtitle,
  backgroundColor = '#4f8ef7',
  disabled = false,
}) => (
  <Hero
    data-testid="hero-image"
    $bg={backgroundColor}
    $src={src}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </Hero>
);

export default HeroImage;
import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ $bg: string; $disabled: boolean }>`
  background-color: ${(p) => (p.$disabled ? '#cccccc' : p.$bg)};
  color: ${(p) => (p.$disabled ? '#666666' : '#1a1a1a')};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 320px;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 1rem;
  }
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const Description = styled.p`
  margin: 0;
  line-height: 1.5;
`;

const Card: React.FC<CardProps> = ({
  title,
  description,
  backgroundColor = '#ffffff',
  disabled = false,
}) => (
  <StyledCard
    data-testid="card"
    $bg={backgroundColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    <Title>{title}</Title>
    <Description>{description}</Description>
  </StyledCard>
);

export default Card;
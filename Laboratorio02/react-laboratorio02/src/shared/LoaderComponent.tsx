import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  0%, 40%, 100% {
    transform: scaleY(0.05);
  }
  20% {
    transform: scaleY(1);
  }
`;

const LoadingWrapper = styled.div`
  --speed-of-animation: 0.9s;
  --gap: 6px;
  --first-color: #4c86f9;
  --second-color: #49a84c;
  --third-color: #f6bb02;
  --fourth-color: #f6bb02;
  --fifth-color: #2196f3;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  gap: var(--gap);
`;

// ✅ Definimos un tipo para las props personalizadas
interface BarProps {
  $color: string;
  $delay: string;
}

const Bar = styled.span<BarProps>`
  width: 4px;
  height: 50px;
  animation: ${scale} var(--speed-of-animation) ease-in-out infinite;
  background: ${(props) => `var(${props.$color})`};
  animation-delay: ${(props) => props.$delay};
`;

export default function ComponentLoading()  {
  return (
    <LoadingWrapper>
      <Bar $color="--first-color" $delay="0s" />
      <Bar $color="--second-color" $delay="-0.8s" />
      <Bar $color="--third-color" $delay="-0.7s" />
      <Bar $color="--fourth-color" $delay="-0.6s" />
      <Bar $color="--fifth-color" $delay="-0.5s" />
    </LoadingWrapper>
  );
};
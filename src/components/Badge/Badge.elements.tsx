import styled from '@emotion/styled';

export const Root = styled.span<{ value: number }>`
  background: var(${({ value }) => (value < 3 ? '--danger' : '--success')});
  font-size: 14px;
  padding: 5px 10px;
  border-radius: ${({ value }) => value * 2}px;
  color: white;
  margin: 0 10px;
  &:hover {
    font-weight: bold;
  }
`;

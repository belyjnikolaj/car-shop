import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: var(--accent-color);
  color: var(--invert-color);
  transition: background-color 250ms ease-in-out;
  width: 100%;
  border-radius: 12px;
  border: none;
  padding: 12px 0;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-hover);
  }
`;

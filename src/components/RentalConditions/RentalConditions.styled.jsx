import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding-bottom: 24px;
`;

export const List = styled.ul`
  // color: var(--secondary-color);
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  color: rgba(18, 20, 23, 0.5);
`;

export const Item = styled.li`
  font-size: 12px;
  line-height: 1.5;

  padding: 7px 14px;

  color: #363535;
  border-radius: 35px;
  background: #f9f9f9;
  &:first-child {
    font-family: Montserrat;
    letter-spacing: -0.24px;
  }
`;

export const Subject = styled.h2`
  font-weight: 500;
  line-height: 1.43;
  color: #121417;
`;

export const Span = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

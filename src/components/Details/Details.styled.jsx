import styled from '@emotion/styled';

export const Section = styled.section`
  width: 100%;
  margin-bottom: 14px;
`;

export const List = styled.ul`
  color: var(--secondary-color);
  display: flex;
  width: 100%;
  &:first-of-type {
    margin-bottom: 4px;
  }
`;

export const Item = styled.li`
  font-size: 12px;
  line-height: 1.5;
  padding-left: 6px;
  padding-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  &:last-child {
    border-right: none;
    padding-right: 5px;
  }
  &:first-of-type {
    padding-left: 0px;
  }
`;

export const Subject = styled.h2`
  font-weight: 500;
  line-height: 1.43;
  color: #121417;
  margin-bottom: 8px;
`;



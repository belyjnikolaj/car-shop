import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ModalContent = styled.div`
  padding: 40px;
  width: 100%;
  color: #121417;
  height: 100%;
`;

export const Image = styled.img`
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`;

export const Span = styled.span`
  color: var(--accent-color);
`;

export const Details = styled.section`
  width: 100%;
  margin-bottom: 14px;
`;

export const DetailsList = styled.ul`
  color: var(--secondary-color);
  display: flex;
  width: 100%;
  &:first-of-type {
    margin-bottom: 4px;
  }
`;

export const DetailsItem = styled.li`
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

export const Description = styled.section`
  line-height: 1.43;
  color: #121417;
  padding-bottom: 24px;
`;

export const Subject = styled.h2`
  font-weight: 500;
  line-height: 1.43;
  color: #121417;
  margin-bottom: 8px;
`;

export const LinkStyle = styled(Link)`
  background-color: var(--accent-color);
  color: var(--invert-color);
  transition: background-color 250ms ease-in-out;
  width: 168px;
  border-radius: 12px;
  border: none;
  padding: 12px 50px;
  cursor: pointer;
  text-decoration: none;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--accent-hover);
  }
`;
export const LinkBox = styled.div`
  display: inline-block;
`;

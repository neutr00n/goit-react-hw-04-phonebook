import styled from '@emotion/styled';

export const ContactCount = styled.span`
  margin-right: 5px;
  font-size: 16px;
`;

export const ContactName = styled.span`
  margin-left: 5px;
  min-width: 250px;
  font-weight: 500;
  font-size: 16px;
`;

export const ContactNumber = styled.a`
  font-size: 16px;

  color: #2f1aaa;
  text-decoration: underline;
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  padding: 2px 10px;

  font-size: 12px;

  background: #f5f4fa;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;

  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;

  :hover,
  :focus {
    background-color: #2196f3;
    color: white;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

import styled from 'styled-components';

export const Introduction = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 16px;
  }

  img {
    width: 48px;
    height: 48px;
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.25rem; /* 20px */
    font-weight: bold;
    color: #1f2937;
  }

  p {
    color: #4b5563;
  }
`;

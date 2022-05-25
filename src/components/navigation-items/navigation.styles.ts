import styled from 'styled-components';

export const NavigationItemsOptions = styled.li`
  list-style: none;
  cursor: pointer;

  & > p {
    display: flex;
    align-items: center;

    & > svg {
      margin-left: calc(16rem / 16);
    }
  }
`;

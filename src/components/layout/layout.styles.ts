import styled from 'styled-components';

const Main = styled.section`
  display: grid;
  grid-template-rows:
    [header-start] min-content [header-end main-start]
    max-content [main-end footer-start] min-content [footer-end];
  grid-template-columns:
    [full-bleed-start] 1fr [center-start]
    90vw [center-end ] 1fr [full-bleed-end];
`;

export default Main;

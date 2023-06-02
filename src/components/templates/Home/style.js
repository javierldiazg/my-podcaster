import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primaryBaseColor};
`;

export const MainWraper = styled.main`
  margin: 1rem auto;

  @media ${props => props.theme.device.tablet} { 
    margin: 2.5rem auto;
  }
`;

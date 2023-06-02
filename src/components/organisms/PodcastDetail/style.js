import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  margin: 0 auto;
	width: 90%;

  @media ${props => props.theme.device.laptop} { 
    grid-template-columns: 35% 1fr;
    grid-gap: 1rem;
  }
`;

export const AsideWrapper = styled.div`
  margin-bottom: 2rem;
  @media ${props => props.theme.device.laptop} { 
    align-self: start;
  }
`;

export const ContentWrapper = styled.div``;

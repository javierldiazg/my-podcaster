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

export const ButtonWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: end;
  a {
		background-color: ${props => props.theme.colors.secondaryBaseColor};
    color: white;
		text-decoration: none;
    border-radius: 50rem!important;
    padding: 0.825rem 1.75rem;
    &:hover {
      box-shadow: 0 0.25rem 0.25rem 0.125rem rgba(253,86,49,.1), 0 0.375rem 0.75rem -0.125rem rgba(253,86,49,.4);
    }
	}
`;

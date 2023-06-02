import styled from "styled-components";

export const FormWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;

  @media ${props => props.theme.device.tablet} { 
    margin-bottom: 1.5rem;
  }

  @media ${props => props.theme.device.laptop} { 
    margin-bottom: 2rem;
  }
`;

export const CountWrapper = styled.div`
  margin-right: 0.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.secondaryBaseColor};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media ${props => props.theme.device.tablet} { 
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
  }

  @media ${props => props.theme.device.laptop} { 
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

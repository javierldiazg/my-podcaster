import styled from "styled-components";

export const Wrapper = styled.div`
	margin-bottom: 1rem;
	display: flex;
	flex-wrap: wrap;
  	justify-content: space-between;
`;

export const Title = styled.div`
	width: 60%;
	a {
		color: ${props => props.theme.colors.secondaryBaseColor};
		text-decoration: none;
	}

	@media ${props => props.theme.device.laptop} { 
		width: 70%;
	}
`;

export const Date = styled.div`
	width: 15%;

	@media ${props => props.theme.device.laptop} { 
		width: 20%;
	}
`;

export const Duration = styled.div`
	width: 10%;
	text-align: center;

	@media ${props => props.theme.device.laptop} { 
		width: 10%;
	}
`;

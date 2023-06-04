import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 1rem 0;
	display: flex;
	flex-wrap: wrap;
  	justify-content: space-between;
	&.odd {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export const Title = styled.div`
	width: 58%;
	padding-left: 0.5rem;
	a {
		color: ${props => props.theme.colors.secondaryBaseColor};
		text-decoration: none;
	}

	@media ${props => props.theme.device.laptop} { 
		width: 68%;
	}
`;

export const Date = styled.div`
	width: 15%;

	@media ${props => props.theme.device.laptop} { 
		width: 20%;
	}
`;

export const Duration = styled.div`
	width: 15%;
	text-align: center;

	@media ${props => props.theme.device.laptop} { 
		width: 10%;
	}
`;

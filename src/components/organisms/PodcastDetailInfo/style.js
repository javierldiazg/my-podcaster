import styled from "styled-components";

export const Card = styled.div`
	background-color: rgb(255, 255, 255);
	border-radius: 0px 0.5rem 0.5rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.5rem;
	padding: 1rem;
	display: flex;

	@media ${props => props.theme.device.laptop} { 
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		flex-wrap: wrap;
		text-align: center;
	}
`;

export const CardItem = styled.div`
	width: 100%;
`;

export const ImageWrapper = styled.div`
	margin-bottom: 1rem;
	img {
		width: 35%;

		@media ${props => props.theme.device.laptop} { 
			width: 85%;
		}
	}
`;

export const Title = styled.h4`
	margin: 0 0 1rem;
	a {
		color: ${props => props.theme.colors.secondaryBaseColor};
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Subtitle = styled.h5`
	margin: 0 0 1rem;
	a {
		color: ${props => props.theme.colors.secondaryBaseColor};
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Description = styled.p``;
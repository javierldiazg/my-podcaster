import styled from "styled-components";

export const Card = styled.section`
	background-color: rgb(255, 255, 255);
	border-radius: 0px 0.5rem 0.5rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.5rem;
	padding: 1rem;
`;

export const Title = styled.h2`
	color: ${props => props.theme.colors.secondaryBaseColor};
`;

export const Description = styled.div`
	margin: 0 0 2rem;
	font-style: italic;
`;

export const AudioWrapper = styled.div`
	margin: 0 0 2rem;
	audio {
		width: 100%;
	}
`;
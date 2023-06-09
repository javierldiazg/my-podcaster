import styled from "styled-components";

export const Wrapper = styled.div``;

export const Card = styled.div`
	background-color: rgb(255, 255, 255);
	border-radius: 0px 0.5rem 0.5rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.5rem;
	padding: 0.5rem;

	@media ${props => props.theme.device.laptop} { 
		padding: 1rem;
	}
`;

export const Title = styled.h4``;

export const ItemsWrapper = styled.div``;

export const HeaderWrapper = styled.div`
	margin-bottom: 1rem;
	display: flex;
	flex-wrap: wrap;
  	justify-content: space-between;
	font-weight: bold;
`;

export const TitleHeader = styled.div`
	width: 58%;
	padding-left: 0.5rem;

	@media ${props => props.theme.device.laptop} { 
		width: 68%;
	}
`;

export const DateHeader = styled.div`
	width: 15%;

	@media ${props => props.theme.device.laptop} { 
		width: 20%;
	}
`;

export const DurationHeader = styled.div`
	width: 15%;
	text-align: center;

	@media ${props => props.theme.device.laptop} { 
		width: 10%;
	}
`;


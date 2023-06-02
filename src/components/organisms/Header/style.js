import styled from 'styled-components';

export const Container = styled.header`
	background-color: white;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 90%;
	margin: 0px auto;
	border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
`;

export const TitleWrapper = styled.section``;

export const Title = styled.h1`
	a {
		color: ${props => props.theme.colors.secondaryBaseColor};
		text-decoration: none;
	}
`;

export const LoaderWrapper = styled.div`
	margin-top: 2.5rem;
	margin-right: 1.5rem;
`;

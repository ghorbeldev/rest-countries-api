import styled from 'styled-components';

export const Box = styled.div`
	background-color: ${props => props.theme.background};
	width: 320px;
	color: ${props => props.theme.text};
	text-align: start;
	padding-bottom: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
	cursor: pointer;
	box-shadow: 0 0 4px 2px rgb(0 0 0 / 10%);
`;
export const Flag = styled.div`
	width: 320px;
	height: 180px;
	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const Name = styled.div`
	color: inherit;
	margin: 0.75rem 0;
	font-weight: 800;
	padding-left: 1.15rem;
	font-size: 1.2rem;
`;
export const About = styled.div`
	padding-left: 1.15rem;
	> div {
		font-size: 0.9rem;
		font-weight: 600;
		margin-bottom: 0.4rem;
		span {
			font-weight: 300;
			opacity: 0.75;
		}
	}
`;

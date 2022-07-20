import styled, { keyframes } from 'styled-components';
import { Container } from '../container/Container.styles';

const pulse = keyframes`
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
`;
export const Wrapper = styled(Container)`
	color: ${props => props.theme.text};
`;
export const BackButton = styled.button`
	padding: 1rem 4rem;
	background-color: ${props => props.theme.background};
	box-shadow: 0 0 6px 3px rgb(10 10 10 / 12%);
	cursor: pointer;
	margin: 2.5rem 0;
	animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;
export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 1rem;
	@media (max-width: 1144px) {
		justify-content: center;
	}
`;
export const Flag = styled.div`
	width: 500px;
	max-width: 100%;
	height: 350px;
	background-color: ${props => props.theme.background};
	animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	@media (max-width: 1144px) {
		margin-bottom: 2rem;
	}
`;
export const About = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 100px);
	grid-template-rows: repeat(8, 40px);
	@media (max-width: 576px) {
		width: 100%;
		grid-template-columns: repeat(5, 1fr);
	}
	> .box {
		margin-top: 2rem;
		background-color: ${props => props.theme.background};
		animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		&:first-of-type {
			grid-area: 3 / 1 / span 5 / span 3;
		}
		&:nth-of-type(2) {
			grid-area: 3 / 4 / span 3 / span 3;
		}
	}
`;
export const Name = styled.h3`
	grid-area: 1 / 1 / span 2 / span 5;
	background-color: ${props => props.theme.background};
	animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

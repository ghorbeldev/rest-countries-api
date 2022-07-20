import styled from 'styled-components';
import { Container } from '../container/Container.styles';

export const Wrapper = styled(Container)`
	color: ${props => props.theme.text};
`;
export const BackButton = styled.button`
	padding: 0.55rem 1.6rem 0.55rem 1.44rem;
	background-color: ${props => props.theme.background};
	box-shadow: 0 0 6px 3px rgb(10 10 10 / 12%);
	color: ${props => props.theme.text};
	font-size: 0.98rem;
	font-weight: 300;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2.5rem 0;
	> svg {
		margin-right: 0.55rem;
	}
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
	display: flex;
	justify-content: center;
	align-items: center;
	> img {
		width: 100%;
	}
	@media (max-width: 1144px) {
		justify-content: flex-start;
		margin-bottom: 2rem;
		> img {
			width: calc(100% - 2rem);
		}
	}
	@media (max-width: 576px) {
		justify-content: center;
		> img {
			width: 100%;
		}
	}
`;
export const About = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 100px);
	@media (max-width: 576px) {
		display: flex;
		flex-wrap: wrap;
	}
	> .box {
		margin-top: 2rem;
		width: fit-content;
		&:first-of-type {
			grid-area: 3 / 1 / span 5 / span 3;
		}
		&:nth-of-type(2) {
			grid-area: 3 / 4 / span 3 / span 3;
		}
		@media (max-width: 576px) {
			width: 100%;
			grid-area: unset;
		}
		> div {
			font-size: 0.9rem;
			font-weight: 600;
			margin-bottom: 0.75rem;
			width: fit-content;
			span {
				font-weight: 300;
				opacity: 0.75;
			}
		}
	}
`;
export const Name = styled.h3`
	grid-area: 1 / 1 / span 2 / span 5;
`;
export const Borders = styled.div`
	margin: 2.4rem 0 0;
	margin-bottom: 1.5rem;
	grid-column: span 5;
`;
export const Border = styled.span`
	display: inline-block;
	padding: 0.77rem 1.11rem;
	cursor: pointer;
	margin: 0.5rem 0 0.5rem 0.665rem;
	border-radius: 0.4rem;
	font-size: 0.8rem;
	background-color: ${props => props.theme.background};
	box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);
	&:first-of-type {
		margin-left: 1rem;
	}
`;

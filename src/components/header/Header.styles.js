import styled from 'styled-components';
import { Container } from '../container/Container.styles';
export const Wrapper = styled.div`
	background: ${props => props.theme.background};
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`;
export const Content = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 4.5rem;
`;
export const Title = styled.h1`
	font-size: 1.25rem;
	color: ${props => props.theme.text};
	font-weight: 600;
`;

export const Toggle = styled.button`
	cursor: pointer;
	background-color: transparent;
	color: ${props => props.theme.text};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	font-weight: light;
	> *:first-child {
		margin-right: 0.45rem;
	}
`;

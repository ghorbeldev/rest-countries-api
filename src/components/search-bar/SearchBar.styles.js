import styled from 'styled-components';
import { Container } from '../container/Container.styles';

export const Content = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 2rem 0;
`;
export const SearchBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
	background-color: ${props => props.theme.background};
	border-radius: 0.2rem;
	color: ${props => props.theme.input || props.theme.text};
`;
export const Label = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	color: inherit;
	font-size: inherit;
	margin-right: 1.2rem;
	margin-left: 1.2rem;
	@media (max-width: 760px) {
		margin-right: 0.4rem;
		margin-left: 0.6rem;
	}
`;
export const Search = styled.input.attrs({
	type: 'text',
	placeholder: 'Search for a country...',
})`
	outline: none;
	border: none;
	color: inherit;
	padding-right: 5rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	background-color: inherit;
	caret-color: ${props => props.theme.input || props.theme.text};
	font-size: 0.9rem;
	@media (max-width: 760px) {
		padding-right: 2rem;
	}
	@media (max-width: 576px) {
		padding-right: 0;
		width: fit-content;
		font-size: 0.85rem;
	}
	::placeholder {
		color: ${props => props.theme.input || props.theme.text};
		opacity: 0.8;
	}
`;
export const DropdownWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
	background-color: ${props => props.theme.background};
	border-radius: 0.2rem;
	color: ${props => props.theme.text};
	cursor: pointer;
	position: relative;
	z-index: 10;
`;
export const DropdownText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: inherit;
	padding: 1rem;
	gap: 2rem;
	background-color: inherit;
	font-size: 0.9rem;
	font-weight: 600;
	@media (max-width: 760px) {
		gap: 0.8rem;
		padding: 1rem 0.75rem;
	}
	@media (max-width: 576px) {
		gap: 0.4rem;
		padding: 1rem 0.6rem;
		font-size: 0.8rem;
	}
`;
export const DropdownItems = styled.ul`
	position: absolute;
	top: calc(100% + 5px);
	left: 0;
	right: 0;
	flex-direction: column;
	flex-wrap: wrap;
	display: flex;
	background-color: inherit;
	color: inherit;
	z-index: -1;
	border-radius: 0.2rem;
	transition: all 0.3s ease-in-out;
	transform-origin: center top;
	transform: ${props => (props.open ? 'scaleY(1)' : 'scaleY(0)')};
	opacity: ${props => (props.open ? 1 : 0)};
	overflow: hidden;
`;
export const DropdownItem = styled.li`
	width: 100%;
	padding: 0.75rem 0.5rem;
	display: inline-block;
	font-size: 0.9rem;
	text-transform: capitalize;
	font-weight: 600;
	transition: all 0.3s;
	&:hover {
		padding-left: 1.11rem;
	}
`;

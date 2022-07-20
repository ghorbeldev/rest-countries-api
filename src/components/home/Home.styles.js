import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

export const Wrapper = styled(InfiniteScroll)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem 1.5rem;
	padding-bottom: 2rem;
	justify-items: center;
	padding: 0 4rem;
	width: 100%;
	@media (max-width: 575.98px) {
		padding: 0 1rem;
	}
`;

import styled from 'styled-components';

export const Box = styled.div`
	background-color: ${props => props.theme.background};
	width: 320px;
	color: ${props => props.theme.text};
	text-align: start;
	cursor: pointer;
	box-shadow: 0 0 4px 2px rgb(0 0 0 / 10%);
`;
export const Flag = styled.div`
	width: 320px;
	height: 180px;
	background-color: #d1d5db;
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
`;
export const Name = styled.div`
	height: 2.5rem;
	background-color: #d1d5db;
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	margin: 0.5rem 0;

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.8;
		}
		50% {
			opacity: 0.4;
		}
	}
`;
export const About = styled.div`
	background-color: #d1d5db;
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	height: 76.8px;
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
`;

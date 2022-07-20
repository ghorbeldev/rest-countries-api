import React from 'react';
import {
	Wrapper,
	Content,
	About,
	Name,
	Flag,
	BackButton,
} from './LoadingDetails.styles';

const LoadingDetails = () => {
	return (
		<Wrapper>
			<BackButton />
			<Content>
				<Flag />
				<About>
					<Name />
					<div className='box'></div>
					<div className='box'></div>
				</About>
			</Content>
		</Wrapper>
	);
};

export default LoadingDetails;

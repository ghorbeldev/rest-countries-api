import React from 'react';
import { Box, About, Flag, Name } from './LoadingCountry.styles';
const LoadingCountry = () => {
	return (
		<Box>
			<Flag />
			<Name />
			<About />
		</Box>
	);
};

export default LoadingCountry;

import React from 'react';
import { Box, About, Flag, Name } from './Country.styles';
import { useNavigate } from 'react-router-dom';

const Country = ({ flagSrc, name, population, region, capital }) => {
	const navigate = useNavigate();
	const showDetails = () => {
		navigate(`/details/${name}`);
	};

	return (
		<>
			<Box onClick={showDetails}>
				<Flag>
					<img src={flagSrc} alt={name} />
				</Flag>
				<Name>{name}</Name>
				<About>
					<div>
						Population:
						<span> {population}</span>
					</div>
					<div>
						Region:
						<span> {region}</span>
					</div>
					<div>
						Capital:
						<span> {capital}</span>
					</div>
				</About>
			</Box>
		</>
	);
};

export default Country;

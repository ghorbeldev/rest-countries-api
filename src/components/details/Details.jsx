import React, { useEffect, useState } from 'react';
import {
	Wrapper,
	BackButton,
	Content,
	Flag,
	About,
	Name,
	Borders,
	Border,
} from './Details.styles';
import countriesApi from '../../config/countriesApi';
import LoadingDetails from '../loading-details/LoadingDetails';
import { useNavigate, useParams } from 'react-router';
import { BiArrowBack } from 'react-icons/bi';
const Details = () => {
	const [country, setCountry] = useState({});
	let { countryName } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(async () => {
			const response = await countriesApi.getCountry(countryName);
			setCountry(response.data[0]);
		}, 2500);
	}, [countryName]);
	console.log(country);
	return (
		<>
			{Object.keys(country).length ? (
				<Wrapper>
					<BackButton
						onClick={() => {
							navigate('/');
						}}
					>
						<BiArrowBack size={18} />
						Back
					</BackButton>
					<Content>
						<Flag>
							<img src={country.flags.png} alt={country.name.official} />
						</Flag>
						<About>
							<Name>{country.name.common}</Name>
							<div className='box'>
								<div>
									Native Name:{' '}
									<span>
										{
											country.name.nativeName[
												Object.keys(country.name.nativeName)[0]
											].official
										}
									</span>
								</div>
								<div>
									Population: <span>{country.population}</span>
								</div>
								<div>
									Region: <span>{country.region}</span>
								</div>

								<div>
									Sub Region: <span>{country.subregion}</span>
								</div>
								<div>
									Capital: <span>{country.capital}</span>
								</div>
							</div>
							<div className='box'>
								<div>
									Top Level Domain: <span>{country.tld[0]}</span>
								</div>
								<div>
									Currencies:{' '}
									<span>
										{
											country.currencies[Object.keys(country.currencies)[0]]
												.name
										}
									</span>
								</div>
								<div>
									Languages:{' '}
									<span>{Object.values(country.languages).join(' ')}</span>
								</div>
							</div>
							{country.borders && (
								<Borders>
									Borders Countries:{' '}
									{country.borders.map(v => (
										<Border key={v}>{v}</Border>
									))}
								</Borders>
							)}
						</About>
					</Content>
				</Wrapper>
			) : (
				<LoadingDetails />
			)}
		</>
	);
};

export default Details;

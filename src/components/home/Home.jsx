import React, { useEffect, useState } from 'react';
import countriesApi from '../../config/countriesApi';
import Country from '../country/Country';
import { Wrapper } from './Home.styles';
import LoadingCountry from '../loading-country/LoadingCountry';
import SearchBar from '../search-bar/SearchBar';

const NUM_PER_PAGE = 8;

const Home = () => {
	const [countries, setCountries] = useState([]);
	const [region, setRegion] = useState('');
	const [keyword, setKeyword] = useState('');
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		const getCountries = async () => {
			let response;
			try {
				if (keyword) {
					response = await countriesApi.getSpecificCountries(keyword);
					setCountries(response.data);
					setCurrentPage(1);
					setData(
						response.data.slice(
							((currentPage - 1) %
								Math.ceil(response.data.length / NUM_PER_PAGE)) *
								NUM_PER_PAGE,
							NUM_PER_PAGE *
								(currentPage % Math.ceil(response.data.length / NUM_PER_PAGE))
						)
					);
					console.log(response.data);
				} else if (region) {
					response = await countriesApi.getRegionCountries(region);
					setCountries(response.data);
					setCurrentPage(1);
					setData(
						response.data.slice(
							((currentPage - 1) %
								Math.ceil(response.data.length / NUM_PER_PAGE)) *
								NUM_PER_PAGE,
							NUM_PER_PAGE *
								(currentPage % Math.ceil(response.data.length / NUM_PER_PAGE))
						)
					);
				} else {
					response = await countriesApi.getAllCountries();
					setCountries(response.data);
					setCurrentPage(1);
					setData(
						response.data.slice(
							((currentPage - 1) %
								Math.ceil(response.data.length / NUM_PER_PAGE)) *
								NUM_PER_PAGE,
							NUM_PER_PAGE *
								(currentPage % Math.ceil(response.data.length / NUM_PER_PAGE))
						)
					);
				}
			} catch (err) {
				console.log(err);
			}
		};
		getCountries();
	}, [keyword, region]);
	const fetchData = () => {
		setTimeout(() => {
			setCurrentPage(prev => prev + 1);
			setData(prevData => [
				...prevData,
				...countries.slice(
					((currentPage - 1) % Math.ceil(countries.length / NUM_PER_PAGE)) *
						NUM_PER_PAGE,
					NUM_PER_PAGE *
						(currentPage % Math.ceil(countries.length / NUM_PER_PAGE))
				),
			]);
		}, 1000);
	};
	return (
		<>
			<SearchBar
				keyword={keyword}
				setkeyword={setKeyword}
				setRegion={setRegion}
			/>
			<Wrapper
				dataLength={data.length}
				next={fetchData}
				hasMore={countries.length > data.length}
				loader={Array(NUM_PER_PAGE)
					.fill(null)
					.map((_, i) => (
						<LoadingCountry key={i} />
					))}
			>
				{data.map((country, index) => (
					<Country
						key={index}
						id={index}
						capital={country.capital}
						name={country.name.official}
						flagSrc={country.flags.png}
						region={country.region}
						population={country.population}
					/>
				))}
			</Wrapper>
		</>
	);
};

export default Home;

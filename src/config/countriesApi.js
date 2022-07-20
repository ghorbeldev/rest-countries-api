import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1/';

const countriesApi = {
	getAllCountries: () => {
		const url = baseURL + 'all';
		return axios.get(url);
	},
	getSpecificCountries: keyword => {
		const url = baseURL + `name/${keyword}`;
		return axios.get(url);
	},
	getCountry: keyword => {
		const url = baseURL + `name/${keyword}?fullText=true`;
		return axios.get(url);
	},
	getRegionCountries: region => {
		const url = baseURL + `region/${region}`;
		return axios.get(url);
	},
};
export default countriesApi;

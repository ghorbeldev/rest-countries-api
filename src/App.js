import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Details from './components/details/Details';
import Header from './components/header/Header';
import Home from './components/home/Home';
import PageWrapper from './components/page-wrapper/PageWrapper';

const themes = {
	dark: {
		background: 'hsl(209, 23%, 22%)',
		elements: 'hsl(207, 26%, 17%)',
		text: 'hsl(0, 0%, 100%)',
	},
	light: {
		elements: 'hsl(0, 0%, 98%)',
		background: 'hsl(0, 0%, 100%)',
		text: 'hsl(200, 15%, 8%)',
		input: 'hsl(0, 0%, 52%)',
	},
};
const GlobalStyle = createGlobalStyle`
	*{
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	html,body {
		min-height: 100vh;
    max-width: 100vw;
		font-family: 'Nunito Sans', sans-serif;
	}
	button{
		border: none;
		outline: none;
	}
	ul{
		list-style: none;
	}

`;
function App() {
	const [theme, setTheme] = useState('dark');
	return (
		<ThemeProvider theme={themes[theme]}>
			<GlobalStyle />
			<PageWrapper>
				<Header theme={theme} setTheme={setTheme} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/details/:countryName' element={<Details />} />
				</Routes>
			</PageWrapper>
		</ThemeProvider>
	);
}

export default App;

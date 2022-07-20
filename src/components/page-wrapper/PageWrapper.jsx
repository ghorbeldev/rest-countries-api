import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Page } from './PageWrapper.styles';
const PageWrapper = ({ children }) => {
	return (
		<Page>
			<BrowserRouter>{children}</BrowserRouter>
		</Page>
	);
};

export default PageWrapper;

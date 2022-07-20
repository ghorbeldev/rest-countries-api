import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Page } from './PageWrapper.styles';
const PageWrapper = ({ children }) => {
	return (
		<Page>
			<HashRouter>{children}</HashRouter>
		</Page>
	);
};

export default PageWrapper;

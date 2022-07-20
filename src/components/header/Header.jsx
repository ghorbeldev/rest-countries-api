import React from 'react';
import { BsFillMoonFill, BsMoon } from 'react-icons/bs';
import { Content, Title, Toggle, Wrapper } from './Header.styles';
const Header = ({ theme, setTheme }) => {
	const changeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
	const icon =
		theme === 'light' ? <BsMoon size={16} /> : <BsFillMoonFill size={16} />;
	return (
		<Wrapper>
			<Content>
				<Title>Where in the world?</Title>
				<Toggle onClick={changeTheme}>
					{icon}
					{theme === 'light' ? 'Light Mode' : 'Dark Mode'}
				</Toggle>
			</Content>
		</Wrapper>
	);
};

export default Header;

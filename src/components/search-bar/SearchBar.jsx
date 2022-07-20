import React, { useState } from 'react';
import {
	Content,
	DropdownItem,
	DropdownItems,
	DropdownText,
	DropdownWrapper,
	Label,
	Search,
	SearchBox,
} from './SearchBar.styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
const regions = ['africa', 'america', 'asia', 'europe', 'oceania'];
const SearchBar = ({ keyword, setkeyword, setRegion }) => {
	const [open, setOpen] = useState(false);
	const handleChange = e => {
		setkeyword(e.target.value);
	};
	return (
		<Content>
			<SearchBox>
				<Label htmlFor='country'>
					<AiOutlineSearch size={18} color='inherit' />
				</Label>
				<Search
					name='country'
					id='country'
					value={keyword}
					onChange={handleChange}
				/>
			</SearchBox>
			<DropdownWrapper open={open} onClick={() => setOpen(prev => !prev)}>
				<DropdownText>
					Filter by Region
					<MdOutlineKeyboardArrowDown size={18} />
				</DropdownText>
				<DropdownItems open={open}>
					{regions.map((region, index) => (
						<DropdownItem key={index} onClick={() => setRegion(region)}>
							{region}
						</DropdownItem>
					))}
				</DropdownItems>
			</DropdownWrapper>
		</Content>
	);
};

export default SearchBar;

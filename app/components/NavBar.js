'use client';
import React, { createElement, Fragment, useEffect, useState } from 'react';
import { Navbar, Collapse, Typography, Button, IconButton, List, ListItem, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Bars4Icon, GlobeAmericasIcon, NewspaperIcon, PhoneIcon, RectangleGroupIcon, SquaresPlusIcon, SunIcon, TagIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import LogoSmall from '@/assets/image/logo-small.png';

const navListMenuItems = [
	{
		title: 'Products',
		description: 'Find the perfect solution for your needs.',
		icon: SquaresPlusIcon,
	},
	{
		title: 'Projects',
		description: 'Find the perfect solution for your needs.',
		icon: RectangleGroupIcon,
	},
	{
		title: 'Clients',
		description: 'Learn how we can help you achieve your goals.',
		icon: GlobeAmericasIcon,
	},
	{
		title: 'About Us',
		description: 'Meet and learn about our dedication',
		icon: UserGroupIcon,
	},
	{
		title: 'Contact',
		description: 'Reach out to us for assistance or inquiries',
		icon: PhoneIcon,
	},
	{
		title: 'Special Offers',
		description: 'Explore limited-time deals and bundles',
		icon: TagIcon,
	},
];

function NavListMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const renderItems = navListMenuItems.map(({ icon, title, description }, key) => (
		<a href='#' key={key}>
			<MenuItem className='flex items-center gap-3'>
				<div className='flex items-center justify-center !bg-secondary/20 p-2 '>
					{createElement(icon, {
						strokeWidth: 2,
						className: 'h-6 text-gray-900 w-6',
					})}
				</div>
				<div>
					<Typography variant='h6' color='blue-gray' className='flex items-center text-sm font-medium tracking-wide'>
						{title}
					</Typography>
					<Typography variant='paragraph' className='text-xs !font-medium text-blue-gray-500'>
						{description}
					</Typography>
				</div>
			</MenuItem>
		</a>
	));

	return (
		<Fragment>
			<Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement='bottom' allowHover={true}>
				<MenuHandler>
					<Typography as='div' variant='small' color='blue-gray' className='font-medium text-md tracking-wider'>
						<ListItem className='flex items-center gap-2 py-2 pr-4 ' selected={isMenuOpen || isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
							FEATURES
							<ChevronDownIcon strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? 'rotate-180' : ''}`} />
							<ChevronDownIcon strokeWidth={2.5} className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className='hidden max-w-screen-xl rounded-xl lg:block'>
					<ul className='grid grid-cols-3 gap-y-2 outline-none outline-0'>{renderItems}</ul>
				</MenuList>
			</Menu>
			<div className='block lg:hidden'>
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</Fragment>
	);
}

function NavList() {
	return (
		<List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'>
			<Typography as='a' href='#' variant='small' color='blue-gray' className='font-medium text-md tracking-wider'>
				<ListItem className='flex items-center gap-2 py-2 pr-4'>HOME</ListItem>
			</Typography>
			<NavListMenu />
		</List>
	);
}

export default function NavBar() {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	return (
		<Navbar className='sticky top-0 z-10 min-w-full px-4 py-2 bg-white rounded-none mx-auto' shadow={false}>
			<div className='mx-auto max-w-screen-2xl'>
				<div className='flex items-center justify-between text-gray-900'>
					<div>
						<Image alt='logo' src={LogoSmall} className='h-10 w-auto' />
					</div>
					<div className='hidden lg:block'>
						<NavList />
					</div>
					<div className='hidden gap-2 lg:flex'>
						<Button variant='outlined' size='lg' color='black' className='rounded-full font-medium px-4 py-2'>
							CONTACT US
						</Button>
					</div>
					<IconButton variant='text' color='blue-gray' className='lg:hidden' onClick={() => setOpenNav(!openNav)}>
						{openNav ? <XMarkIcon className='h-6 w-6' strokeWidth={2} /> : <Bars3Icon className='h-6 w-6' strokeWidth={2} />}
					</IconButton>
				</div>
				<Collapse open={openNav}>
					<NavList />
					<div className='flex w-full flex-nowrap items-center gap-2 lg:hidden'>
						<Button variant='outlined' size='lg' color='black' className='rounded-full font-semibold px-4 py-2' fullWidth>
							CONTACT US
						</Button>
					</div>
				</Collapse>
			</div>
		</Navbar>
	);
}

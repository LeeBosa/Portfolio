// Fonts
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// Metadata
import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Alding · A simple animated landing page.',
	description: 'Alding is a simple animated landing page using next.js and typescript.',
	icons: { icon: '/favicon.ico' }
}

// Styles
import '@/css/globals.css';
import '@/css/spinner-main.css';
import '@/css/spinner-square.css';
import '@/css/spinner-circle.css';
import '@/css/spinner-code.css';
import '@/css/spinner-bar.css';

// Components
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import MenuList from '@/components/MenuList';
import MenuOption from '@/components/MenuOption';
import MenuLink from '@/components/MenuLink';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<html lang="en">
			<head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
			</head>
			<body className={`${inter.className} tracking-wider bg-black`}>
                <Header
					height={5}
					heightUnit="rem"
				>
					<Logo
						src="/logo.svg"
						name="Alding"
					/>
					<Menu>
						<MenuList
							name="LINKS"
							width={12}
							widthUnit="rem"
						>
							<MenuOption
								href="/"
								target="_blank"
							>
								External link
							</MenuOption>
							<MenuOption
								href="/"
								icon="fa-solid fa-droplet"
							>
								Internal link
							</MenuOption>
						</MenuList>
						<MenuLink
							href="/"
							target="_blank"
						>
							LINK
						</MenuLink>
					</Menu>
				</Header>
				{children}
				<footer className="absolute bottom-4 right-5 text-xs text-white">MIT License © 2023-{new Date().getFullYear()} Alding.</footer>
			</body>
		</html>
	)
}
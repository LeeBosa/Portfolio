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

// Next
import Link from 'next/link';
import Image from 'next/image';

// Components
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import MenuList from '@/components/MenuList';

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
			<body className={`${inter.className} tracking-widest bg-black`}>
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
							name="PROJECTS"
						>
							<div></div>
						</MenuList>
						<li>
							<Link href="https://taedonn.tistory.com" target="_blank" rel="noopener noreferrer" className="group block p-3 tsm:p-1.5 font-semibold text-xs text-white text-center tracking-widest">
								BLOG
								<div className="group-hover:w-[100%] tlg:group-hover:w-0 w-0 h-px bg-white duration-200 mt-0.5"></div>
							</Link>
						</li>
						<li>
							<Link href="https://github.com/taedonn" target="_blank" rel="noopener noreferrer" className="group block p-3 tsm:p-1.5 font-semibold text-xs text-white text-center tracking-widest">
								GITHUB
								<div className="group-hover:w-[100%] tlg:group-hover:w-0 w-0 h-px bg-white duration-200 mt-0.5"></div>
							</Link>
						</li>
						<li>
							<Link href="/about" className="group block p-3 tsm:p-1.5 font-semibold text-white text-xs text-center tracking-widest">
								ABOUT
								<div className="group-hover:w-[100%] tlg:group-hover:w-0 w-0 h-px bg-white duration-200 mt-0.5"></div>
							</Link>
						</li>
					</Menu>
				</Header>
				{children}
			</body>
		</html>
	)
}
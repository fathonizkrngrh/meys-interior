import Footer from './components/Footer';
import './styles/globals.css';

export const metadata = {
	title: `Mey's Interior`,
	description: '',
};

export default function RootLayout({ children}) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/image/logo-small.png' sizes='any' />
			</head>
			<body className={`antialiased`}>
				{children}
				<Footer/>
			</body>
		</html>
	);
}

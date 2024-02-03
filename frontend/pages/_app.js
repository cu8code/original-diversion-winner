import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';
import { AuthProvider } from './AuthContext';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'ethereum';

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider
			activeChain={activeChain}
			clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
		>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</ThirdwebProvider>
	);
}

export default MyApp;

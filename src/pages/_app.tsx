import type { AppProps } from "next/app";

// Styles
import '@/styles/globals.css';
import '@/styles/spinner-main.css';
import '@/styles/spinner-square.css';
import '@/styles/spinner-circle.css';
import '@/styles/spinner-code.css';
import '@/styles/spinner-bar.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main>
            <Component {...pageProps}/>
        </main>
    );
}; 
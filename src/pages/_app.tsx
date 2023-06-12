import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from '@/components/Navigation';
import "@/styles/globals.scss";

const stripeSrc: string = 'https://js.stripe.com/v3/buy-button.js'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="description" content="National Association of Orthopedic Technicians" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>NAOT</title>
        <script async src={stripeSrc} />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

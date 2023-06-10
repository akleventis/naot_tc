import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="description" content="National Association of Orthopedic Technicians" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" /> */}
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

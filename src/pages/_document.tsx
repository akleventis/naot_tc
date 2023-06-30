import { Html, Head, Main, NextScript } from 'next/document'

const stripeSrc: string = "https://js.stripe.com/v3/buy-button.js";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="National Association of Orthopedic Technicians" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <title>NAOT</title>
        <script async src={stripeSrc} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

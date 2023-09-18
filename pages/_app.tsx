import Head from "next/head";
import "../public/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import localFont from "next/font/local"

const blinkMacSystemFont = localFont({
  src: [
    {
      path: '../public/fonts/BlinkMacSystemFont-Ultralight.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/BlinkMacSystemFont-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/BlinkMacSystemFont-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/BlinkMacSystemFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-blinkMac'
})

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
      <div>
        <Head>
          <title>Bridger Brown Dev</title>
          <meta property="og:title" content="Bridger Brown Dev" />
          <meta property="og:image" content={"/bbdev-meta.png"} />
          <meta
            property="og:description"
            content="Hello, my name is Bridger Brown and I am a Front-End Developer and Designer based out of Portland, Oregon."
          />
          <meta name="title" content="Bridger Brown Dev" />
          <meta name="image" content={"/bbdev-meta.png"} />
          <meta
            name="description"
            content="Hello, my name is Bridger Brown and I am a Front-End Developer and Designer based out of Portland, Oregon."
          />
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=5.0, target-densityDpi=device-dpi"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/site.webmanifest"/>
        </Head>
        <AnimatePresence mode="wait" initial={false}>
          <main className={`${blinkMacSystemFont.variable} font-sansSerif, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`}>
            <Component {...pageProps} key={router.asPath} />
          </main>
        </AnimatePresence>
      </div>
  );
}

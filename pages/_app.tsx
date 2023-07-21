import Head from "next/head";
import "../public/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
      <div>
        <Head>
          <meta property="og:title" content="Bridger Brown Dev" />
          <meta property="og:image" content={"/bbdev-meta.png"} />
          <meta
            property="og:description"
            content="Hello, my name is Bridger Brown and I am a Front-End Developer and Designer based out of Portland, Oregon."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi"
          />
        </Head>
        <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
  );
}

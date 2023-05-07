import type { AppProps } from "next/app";
import AppContext from "@context/AppContext";
import useInitialState from "hooks/useInitialState";
import Header from "@components/Header";
import Script from "next/script";
import "@styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  const initialState = useInitialState();

  return (
    <>
      <AppContext.Provider value={initialState}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MTP8VJF8YR"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {` 
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-MTP8VJF8YR');
            `}
        </Script>
        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

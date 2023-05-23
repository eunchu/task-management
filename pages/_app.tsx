import { useEffect } from "react";
import type { AppProps } from "next/app";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import NProgress from "nprogress";
import CssBaseline from "@mui/material/CssBaseline";

import GlobalStyle from "@/styles/globals";
import { theme } from "@/styles/theme";

import "nprogress/nprogress.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  // NOTE 페이지 이동 시 로딩 처리
  useEffect(() => {
    const start = () => NProgress.start();
    const end = () => NProgress.done();

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Head>
              <title>Task Management</title>
            </Head>
            <GlobalStyle />
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
          {!!(process.env.NODE_ENV === "development") && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </QueryClientProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}

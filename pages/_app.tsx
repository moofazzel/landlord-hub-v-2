import MainLayout from "@/components/layouts/main/mainLayout";
import "@/styles/globals.css";
import { NextPage } from "next";
import { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
  Layout?: React.ComponentType;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || MainLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;

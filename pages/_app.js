// react tostify notification
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";

import { Provider } from "react-redux";
import { store } from "../store/store";
import MainLayout from "@/components/layouts/main/mainLayout";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;

  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <ToastContainer />
    </>
  );
}
export default MyApp;

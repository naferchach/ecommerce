import React from 'react';
import App from 'next/app';
import { CartContextProvider } from '../contexts/CartContext';
import { OrderContextProvider } from '../contexts/OrderContext';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CartContextProvider>
        <OrderContextProvider>
          <Component {...pageProps} />
        </OrderContextProvider>
      </CartContextProvider>
    );
  }
}

export default MyApp;

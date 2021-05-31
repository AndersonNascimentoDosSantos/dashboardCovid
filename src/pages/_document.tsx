import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            
        </Head>

        <body className="keen-dashboard">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

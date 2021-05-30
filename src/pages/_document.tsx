import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8" />
    <title>Números de Covid por país</title>
        </Head>

        <body className="keen-dashboard">
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

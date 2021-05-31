import Head from 'next/head'
import React from "react";
// import '../styles/global.scss'
import styles from "../styles/app.module.scss";
import "./home.css";

// import { Header } from '../componentes/Header'
// import { Player } from '../componentes/Player'

function MyApp({ Component, pageProps }) {
  return (
    <>
          <Head>
                <title>Números de Covid por país</title>
          </Head>
          <div className={styles.wrapper}>
            <main>
              {/* <Header /> */}
              <Component {...pageProps} />
            </main>
            {/* <Player /> */}
          </div>
    </>
  );;;
}

export default MyApp;

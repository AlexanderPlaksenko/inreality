import Head from 'next/head'
import normalize from 'normalize.css'

import Header from '/components/Header'
import FirstScreen from '/components/FirstScreen'
import SecondScreen from '/components/SecondScreen'
import ThirdScreen from '/components/ThirdScreen'
import FourScreen from '/components/FourScreen'
import FiveScreen from '/components/FiveScreen'
import SixScreen from '/components/SixScreen'
import SevenScreen from "../components/SevenScreen";
import EightScreen from '/components/EightScreen'
import Footer from '/components/Footer'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    .wrapper {
        max-width: 1920px;
        padding: 0 118px;
        margin: 0 auto;
        width: 100%;
        display: block;
        position: relative;
    }
    
    .flex {
        display: flex;
    }
`

export default () =>
    <div>
        <Head>
            <title>This page has a title 🤔</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel="stylesheet" href="/static/css/helpers.css" />
            <link rel="stylesheet" href="/static/css/base.css" />
            <link rel="stylesheet" href="/static/css/stylesheet.css" />
            <link href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=cyrillic" rel="stylesheet" />
        </Head>
        <GlobalStyle />

        <Header/>
        <FirstScreen/>
        <SecondScreen/>
        <ThirdScreen/>
        <FourScreen/>
        <FiveScreen/>
        <SixScreen/>
        <SevenScreen/>
        <EightScreen/>
        <Footer/>
    </div>
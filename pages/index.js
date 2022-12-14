import Head from 'next/head';
import { Fragment } from 'react';
import Intro from './intro/intro';
import Portfolio from './portfolio/portfolio';

export default function Home() {
  return (   
    <Fragment>
        <Head>
        <title>Ahmed Abou Khatwa CV</title>
        </Head>
        <Intro />
        <Portfolio/>
    </Fragment>
  )
}
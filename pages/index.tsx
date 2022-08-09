import type { NextPage } from "next";
import { Main, Tournament, Banner, Ongoing, Live } from "../components/Home";
import { Navbar, Footer } from "../components/Reusable";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gaming | Home</title>
      </Head>
      <Navbar />
      <Main />
      <Tournament />
      <Banner />
      <Ongoing />
      <Live />
      <Footer />
    </>
  );
};

export default Home;

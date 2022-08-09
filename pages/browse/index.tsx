import React from "react";
import { Navbar, Footer } from "../../components/Reusable";
import { Form, Games, Results } from "../../components/Browse";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Gaming | Browse</title>
      </Head>
      <Navbar />
      <Form />
      <Games />
      <Results />
      <Footer />
    </>
  );
};

export default index;

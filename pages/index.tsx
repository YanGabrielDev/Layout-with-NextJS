import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Router from "next/router";

const Home: NextPage = () => {
  return (
    <div>
      <h1 onClick={() => Router.push("/oi")}>E la vamos nos</h1>
    </div>
  );
};

export default Home;

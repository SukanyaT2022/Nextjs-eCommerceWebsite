import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
          <title>Home</title>
      </Head>
      <h1 className="text-4xl text-center mt-12">Welcome to Home Page</h1>
    </div>
  );
}
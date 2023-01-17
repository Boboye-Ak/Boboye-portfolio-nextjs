import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const iconSelector = Math.floor(Math.random()) % 2;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Boboye's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={iconSelector ? "Boboye Bitmoji.jpeg" : "Boboye Bitmoji-2.jpeg"}
        />
      </Head>
    </>
  );
}

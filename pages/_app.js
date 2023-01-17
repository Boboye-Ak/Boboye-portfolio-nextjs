import "@/styles/globals.css"
import "@/styles/Sidebars/sidebar-mobile.css"
import "@/styles/Sidebars/sidebar-pc.css"
import Head from "next/head"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
    const iconSelector = Math.floor(Math.random()) % 2
    return (
        <>
            {" "}
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Boboye's Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="icon"
                    href={iconSelector ? "Boboye Bitmoji.jpeg" : "Boboye Bitmoji-2.jpeg"}
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

import "@/styles/globals.css"
import "@/styles/Sidebars/sidebar-mobile.css"
import "@/styles/Sidebars/sidebar-pc.css"
import "@/styles/Sections/home-section.css"
import "@/styles/Sections/about-section.css"
import "@/styles/Sections/resume-section.css"
import "@/styles/Sections/projects-section.css"
import "@/styles/Sections/contact-section.css"
import "@/styles/arrows.css"
import Head from "next/head"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
    const boboyeBitmojis = [
        "bitmojis/Boboye Bitmoji.jpeg",
        "bitmojis/Boboye Bitmoji-2.jpeg",
        "bitmojis/Boboye Bitmoji-3.jpeg",
        "bitmojis/Boboye Bitmoji-4.jpeg",
    ]
    const iconSelector = Math.floor(Math.random() * 100) % boboyeBitmojis.length

    return (
        <>
            {" "}
            <Head>
                <title>Boboye&apos;s Portfolio</title>
                <meta name="description" content="Boboye's Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={boboyeBitmojis[iconSelector]} />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

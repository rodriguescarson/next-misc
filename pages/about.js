import Footer from "@/layout/Footer"
import Head from 'next/head'
function About() {
    return <>
        <Head>
            <title>About Carson</title>
            <meta name='description' content='Rodrigues Carson' />

        </Head>
        <div className="layout-content">About</div>
    </>
}
export default About

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}
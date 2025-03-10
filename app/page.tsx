import Head from "next/head";
import Header from "@/components/header";
import { About } from "@/components/about";
import { Timeline } from "@/components/timeline";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/images/favicon-16x16.png" />
      </Head>
      <div className="py-[2rem] ">
      <Header />
      <About/>
      <Timeline/>
      </div>
      <Footer/>
    </>
  );
}
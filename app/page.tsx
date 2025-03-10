import Head from "next/head";
import Header from "@/components/header";
import { About } from "@/components/about";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/images/favicon-16x16.png" />
      </Head>
      <div className="py-[4rem] space-y-[4rem]">
      <Header />
      <About />
      <Timeline/>
      </div>
    </>
  );
}
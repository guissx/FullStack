import Head from "next/head";
import Header from "@/components/header";
import { About } from "@/components/about";
import { Timeline } from "@/components/timeline";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
    <Head>
    <link rel="icon" href="/favicon.ico" /> 
    </Head>
      <div className="pt-[2rem] ">
      <Header />
      <About/>
      <Timeline/>
      <ContactForm/>
      </div>
      <Footer/>
    </>
  );
}
import Head from "next/head";
import { Inter } from "next/font/google";

import MainLayout from "@/components/layouts/main/mainLayout";
import Services from "@/components/Home/Services";
import WhatCanDo from "@/components/Home/WhatCanDo";
import AnalyzeData from "@/components/Home/AnalyzeData";
import Banner from "@/components/Home/Banner";
import Footer from "@/components/Home/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Landlord Hub v2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:container px-5 sm:px-10 lg:px-0">
        {/* Banner */}
        <Banner />

        {/* Services */}
        <Services />

        {/* What can landlord hub do */}
        <WhatCanDo />

        {/* Analyze section */}
        <AnalyzeData />
      </main>
      <Footer />
    </>
  );
}

Home.Layout = MainLayout;

import Footer from "@/comps/Footer";
import Navbar from "@/comps/Navbar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hello</h1>
      </main> */}
      <Footer />
    </Fragment>
  );
}

import React from "react";
import "./Home.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Page3 from "../components/page3";
import Foter from "../components/footer";
import Page2 from "../components/page2";

function Home() {
  const Left = useRef();

  useGSAP(() => {
    gsap.from(Left.current, {
      x: -300,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  });

  return (
    <>
      <div
        className="page1 flex  justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/garden-bg.jpg')" }}
      >
        <div ref={Left} className="page-left text-center p-10 rounded-lg mt-20">
          <h1 className="text-10xl font-bold uppercase">
            Balaji <br /> Services
          </h1>
          <h3 className="text-2xl mt-4">Five Star Garden Service Provider</h3>
          <div className="">
            <img src="/images/ratingstar.jpg" alt="Rating" className="mx-auto bg-center scale-150" />
          </div>
        </div>
      </div>
      <Page2 />
      <Page3 />
      <Foter />
    </>
  );
}

export default Home;
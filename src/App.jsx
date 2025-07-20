import HeroVideo from "./assets/videos/HeroVideo.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, Flip);

export default function App() {
  const flipAnimation = () => {
    const containerElement = document.querySelector("h1");
    const elements = document.querySelectorAll("h1 > div");
    const state = Flip.getState(elements);

    containerElement.classList.toggle("flex-between");

    Flip.from(state, {
      duration: 0.8,
      ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    });
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      { isDesktop: "(min-width: 800px)", isMobile: "(max-width: 799px)" },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        const tl = gsap.timeline({ paused: 0 });
        const splitText = new SplitText("h1", { type: "words" });

        tl.from(splitText.words, {
          yPercent: isDesktop ? 150 : 235, // 150 EN DESKTOP || 235 EN MOBILE
          duration: 1.5,
          stagger: 0.15,
          ease: "power3.inOut",
          skewY: isDesktop ? 50 : 25, // 50 EN DESKTOP || 25 EN MOBILE
        })
          .call(isDesktop ? flipAnimation : null, [])
          .to(
            ".video",
            {
              "--point1X": "40%",
              "--point1Y": "40%",
              "--point2X": "40%",
              "--point2Y": "60%",
              "--point3X": "60%",
              "--point3Y": "60%",
              "--point4X": "60%",
              "--point4Y": "40%",
              duration: 0.6,
              ease: "power3.in",
            },
            "step1-=.5"
          )
          .to(
            ".video",
            {
              "--point1X": "0%",
              "--point1Y": "0%",
              "--point3X": "100%",
              "--point3Y": "100%",
              ease: "power3.out",
              duration: 1,
            },
            "step1+=0.11"
          )
          .to(
            ".video",
            {
              "--point2X": "0%",
              "--point2Y": "100%",
              "--point4X": "100%",
              "--point4Y": "0%",
              ease: "power3.out",
              duration: 0.6,
              onComplete: () => {
                console.log("FINISHED");
              },
            },
            "step1+=0.11"
          );
      }
    );
  });

  return (
    <main className="h-full">
      <section className="h-full relative flex items-center justify-center bg-black">
        <div className="flex w-full justify-center px-10">
          <h1 className="flex flex-wrap gap-4 leading-none text-center lg:leading-normal w-full text-[85px] justify-center lg:gap-20 lg:text-[200px] font-Playfair text-white overflow-hidden">
            Jèc YnS Ìdè
          </h1>
        </div>
        <div className="home-intro">
          <video
            className="video"
            loop
            autoPlay
            playsInline
            muted
            src={HeroVideo}
          />
        </div>
      </section>
    </main>
  );
}

import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useInView } from "react-intersection-observer"
import FadeInSection from "../utils/FadeinSection"

let inViewTrigger = 0
export default function Home() {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "100px",
  })
  if (inView) {
    inViewTrigger++
  }
  return (
    <div>
      <span ref={ref}></span>
      <section className="landing">
        <div
          className={"hero-text"}
          style={
            !inView && inViewTrigger > 0
              ? { animation: "logoFade 0.3s both" }
              : inViewTrigger > 1
              ? { animation: "opacityTitle 1s both" }
              : { animation: "opacityTitle 1s 1.6s both" }
          }
        >
          {!inView && inViewTrigger > 0}
          Dorian Collier
          <div>Fullstack Developer</div>
          <div className="social-media">
            <FontAwesomeIcon icon={faGithub} size="2x" color="#17171d" />
            <FontAwesomeIcon icon={faGithub} size="2x" color="#17171d" />
          </div>
        </div>
        <div className="productBg">
          <div className="hero-content"></div>
        </div>
      </section>

      <section className="projects">
        <FadeInSection>
          <div className="projects-title">Projects</div>
        </FadeInSection>
      </section>
      {/* <section className="cv">CV</section>
      <section className="blog">Blog</section> */}
    </div>
  )
}

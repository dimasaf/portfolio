import React from "react"
import Header from "../components/header"
import Section from "../components/section"
import About from "../components/about"
import Project from "../components/project"

const IndexPage = () => (
  <div className="bg-secondary box-border">
    <div
      className="h-screen bg-primary"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0% 99.5%)" }}
    >
      {/* header */}
      <Header />

      {/* section */}
      <Section />
    </div>

    {/* About */}
    <About />

    {/* Project 3 */}
    <Project />
  </div>
)

export default IndexPage

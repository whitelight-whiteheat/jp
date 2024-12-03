import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";
import { projects } from "../components/data/data";

import web from "../assets/web.png";
import Github from "../assets/github.svg";

const Conteiner = styled(motion.div)`
  height: auto;
  color: #c3c3c3;
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: "Inconsolata", monospace;
  z-index: 99;
  overflow: hidden;
`;

export const ContainerSlideIn = styled(motion.div)`
  position: relative;
`;

const StyledProject = styled.div`
  color: rgb(195, 195, 195);
  margin: 1.6rem;
`;

const Social = styled.img`
  border-radius: 100%;
  width: 22px;
  height: 22px;
  margin-top: 6px;
  cursor: pointer;
`;

const Projects = () => {
  return (
    <>
      <Conteiner
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {projects.map((exp, i) => {
          return (
            <ContainerSlideIn
              variants={fadeIn("left", "tween", (i + 1) * 0.2, 0.8)}
              key={i}
            >
              <StyledProject>
                <h3 style={{ fontWeight: 400 }}>• {exp.name}</h3>
                <p style={{ fontWeight: 350 }}>{exp.projects}</p>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    float: "right",
                    marginTop: 6,
                  }}
                >
                  {exp.year}
                </p>
                <div
                  style={{
                    margin: 20,
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <a style={{ marginRight: 10 }} href={exp.url} target="blank">
                    <Social src={Github} alt="Cau's Github" />
                  </a>
                  <a href={exp.web} target="blank">
                    <Social src={web} alt="Cau's Page" />
                  </a>
                </div>
              </StyledProject>
            </ContainerSlideIn>
          );
        })}
      </Conteiner>
    </>
  );
};

export default Projects;

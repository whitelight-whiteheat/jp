import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../data/motion';
import { ContainerSlideIn } from '../../pages/Projects';

const AboutDiv = styled(motion.div)`
  max-width: 24rem;
  height: auto;
  color: #c3c3c3;
  position: absolute;
  padding: 1.6rem;
  bottom: 0;
  right: 0;  
  font-family: "Inconsolata", monospace;
  overflow: hidden;

  p {
      padding-bottom: 1rem;
    }
`;

const About = () => {
  return (
    <AboutDiv
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    >
      <ContainerSlideIn
      variants={fadeIn("left", "tween", 1.4, 1)}
      >
        <div>
          <p>
            Self-taught Front-end Developer Jr.
          </p>
          <p>
            Primary Techs: Javascript, ReactJs, CSS, Styled Components, HTML. Currently studying Typescript and Node.
          </p>
          <p>
            I'm searching for a junior level position where I can utilize my skills to create amazing product with cool design & user experience.
          </p>
          <p>
            My motivators are curiosity, great design, and the desire to achieve something remarkable. 
          </p>
          <p>
            My goal is to create exceptional web experiences.
          </p>
          <p>
            Let's work together to make a lasting impact.
          </p>
        </div>
        </ContainerSlideIn>
    </AboutDiv>
  )}

export default About

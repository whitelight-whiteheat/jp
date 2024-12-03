import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 5%);
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  display: flex;
  animation: ${fadeOut} 1s ease-in-out forwards 2s;
`;


const Splash = () => {
  const name = useRef(null);

  useEffect(() => {
    const typed = new Typed(name.current, {
      strings: ["jp. "],
      startDelay: 600,
      typeSpeed: 140,
    });

    return () => {
      typed.destroy();
    };
  }, []);


  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
      <Container>
        <Title show={show}>
          <pre ref={name}></pre>
          <pre id="portfolio">portfolio</pre>
        </Title>
      </Container>
  );
};

export default Splash;
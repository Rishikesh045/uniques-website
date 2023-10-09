import React from "react";
import styled, { keyframes, css } from "styled-components";
import c1 from "../Companions/1.png";
import c2 from "../Companions/2.png";
import c3 from "../Companions/3.png";
import c4 from "../Companions/4.png";
import c5 from "../Companions/5.png";

function App() {
  const row1 = [c1, c2, c3, c4, c5];

  // Duplicate the row1 array to create a seamless loop
  const duplicatedRow1 = [...row1, ...row1];

  return (
    <AppContainer>
      <Wrapper>
        <Text>Our Project Highlights</Text>
        <Note>"Where Vision Meets Reality: Unraveling Our Finest Project Highlights"</Note>
        <Marquee>
          <MarqueeGroup>
            {duplicatedRow1.map((logo, index) => (
              <ImageGroup key={index}>
                <Image src={logo} alt={`Logo ${index + 1}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 60vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 78%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 200%; /* Double the width to accommodate duplicated images */
  animation: ${scrollX} 60s linear infinite; /* Extended duration */
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 85%;
  height: 85%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

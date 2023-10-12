import React from "react";
import styled, { keyframes, css } from "styled-components";
import logo1 from "../Companions/1.png";
import logo2 from "../Companions/2.png";
import logo3 from "../Companions/3.png";
import logo4 from "../Companions/4.png";
import logo5 from "../Companions/5.png";

function App() {
  const row1 = [logo1, logo2, logo3, logo4, logo5];
  const row2 = [logo1, logo2, logo3, logo4, logo5]; // Make sure to use the same images in both rows

  return (
    <AppContainer>
      <Wrapper>
        <Text>Our Project Highlights</Text>
        <Note>
          "Where Vision Meets Reality: Unraveling Our Finest Project Highlights"
        </Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((logo, index) => (
              <ImageGroup key={index}>
                <Image src={logo} alt={`Logo ${index + 1}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((logo, index) => (
              <ImageGroup key={index}>
                <Image src={logo} alt={`Logo ${index + 5}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default App;

// ... the rest of your styled components


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
  width: 1200px;
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
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 20s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
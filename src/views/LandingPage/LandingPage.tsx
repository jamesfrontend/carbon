import { Column, Grid, Row } from "carbon-components-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MobileProfileImage, ProfileImage } from "./profileImage";
import {
  JNCONTENT,
  JNTITLE,
  TENCONTENT,
  TENTITLE,
} from "../../../config/content";
import { LandingPageTypes } from "./types";
import { blush } from "../../../tokens/tokens";

interface HomeProps {}

export default function LandingPage({}: HomeProps) {
  const [aboutOpacity, setAboutOpacity] = useState("0");
  const [recPos, setRecPos] = useState("-300px");
  const [kbTop, setKbTop] = useState("-600px");
  const [jnTop, setJnTop] = useState("-600px");

  useEffect(() => {
    setTimeout(() => setAboutOpacity("1"), 200);
    setTimeout(() => setKbTop("5%"), 400);
    setTimeout(() => setJnTop("25%"), 900);
    setTimeout(() => setRecPos("-100px"), 1600);
  }, []);

  const profileImageData = [
    {
      className: "ten",
      title: TENTITLE,
      content: TENCONTENT,
      src: "/images/ten-intro.jpg",
      linkedinUrl: "https://www.linkedin.com/in/mysteriousxbeauty/",
      linkedinName: "mysteriousxbeauty",
      position: kbTop,
    },
    {
      className: "jn",
      title: JNTITLE,
      content: JNCONTENT,
      src: "/images/jn-intro.jpg",
      linkedinUrl: "https://www.linkedin.com/in/jamesnpro/",
      linkedinName: "jamesnpro",
      position: jnTop,
    },
  ];

  return (
    <>
      <Main className="bx--content">
        {profileImageData.map((img, index) => (
          <ProfileImage
            key={index}
            top={img.position}
            src={img.src}
            title={img.title}
            content={img.content}
            className={img.className}
            linkedinName={img.linkedinName}
            linkedinUrl={img.linkedinUrl}
          />
        ))}
        <Grid>
          <Row>
            <Column lg={{ offset: 1, span: 1 }} md={1} sm={0}>
              <AboutMe opacity={aboutOpacity} />
            </Column>
          </Row>
          {profileImageData.map((img, index) => (
            <MobileProfileImage
              key={index}
              top={img.position}
              src={img.src}
              title={img.title}
              content={img.content}
              className={img.className}
              linkedinName={img.linkedinName}
              linkedinUrl={img.linkedinUrl}
            />
          ))}
        </Grid>
      </Main>
      <SquareRotated recPos={recPos} />
      <MobileAboutMe />
    </>
  );
}

const SquareRotated = styled.div<LandingPageTypes>`
  position: fixed;
  top: 10rem;
  right: ${({ recPos }) => recPos};
  aspect-ratio: 1 / 1;
  width: 200px;
  background-color: black;
  transform: rotate(45deg);
  transition: all 500ms ease-in-out;

  @media (max-width: 1150px) {
    width: 10%;
    right: -10%;
  }

  @media (max-width: 671px) {
    display: none;
  }
`;

const Main = styled.main`
  overflow: hidden;
  position: relative;
  background-color: transparent;
  padding-block: 0;

  @media (orientation: landscape) {
    overflow: unset;
  }
`;

const MobileAboutMe = styled.div`
  position: fixed;
  display: block;
  left: 1rem;
  width: 0.5rem;
  background-color: ${blush};
  height: 100vh;
  top: 3rem;
  transition: opacity 700ms ease;
  &:after {
    content: "About Us";
    font-weight: 700;
    letter-spacing: 0.16em;
    font-family: inherit;
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1em;
    position: absolute;
    padding-inline: 1rem;
    min-height: 1rem;
    background-color: white;
    white-space: nowrap;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
  }

  @media (min-width: 672px) {
    display: none;
  }
`;

const AboutMe = styled.div<LandingPageTypes>`
  position: relative;
  width: 0.5rem;
  background-color: ${blush};
  height: calc(100vh - 3rem);
  opacity: ${({ opacity }) => opacity};
  transition: opacity 700ms ease;
  &:after {
    content: "About Us";
    font-weight: 700;
    letter-spacing: 0.16em;
    font-family: inherit;
    text-transform: uppercase;
    font-size: 1.25rem;
    line-height: 1em;
    position: absolute;
    padding-inline: 1rem;
    min-height: 1rem;
    background-color: white;
    white-space: nowrap;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
  }
`;

import { Column, Grid, Row } from "carbon-components-react"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Image from "next/image"

interface HomeProps {}

const TTCONTENT =
  "I'm THERESE, a lifelong artist specializing in character concepts."
const JNCONTENT =
  "I'm James Nguyen, a front end warrior that can merge what's in your head with what your eyes can see."
export default function Home({}: HomeProps) {
  const [aboutOpacity, setAboutOpacity] = useState("0")
  const [recPos, setRecPos] = useState("-300px")
  const [kbTop, setKbTop] = useState("-60%")
  const [jnBottom, setJnBottom] = useState("-60%")

  useEffect(() => {
    setTimeout(() => setAboutOpacity("1"), 200)
    setTimeout(() => setKbTop("5%"), 400)
    setTimeout(() => setJnBottom("25%"), 900)
    setTimeout(() => setRecPos("-100px"), 1600)
  }, [])
  return (
    <>
      <Main className="bx--content">
        <ImageDiv className="kb-div" top={kbTop}>
          <Image
            layout="responsive"
            height={400}
            width={300}
            alt="kb intro picture"
            src="/images/kb-intro.jpg"
          />
          <Subheader>Artist, Illustrator</Subheader>
          <P>{TTCONTENT}</P>
        </ImageDiv>
        <ImageDiv className="jn-div" bottom={jnBottom}>
          <Image
            layout="responsive"
            height={400}
            width={300}
            alt="jn intro picture"
            src="/images/jn-intro.jpg"
          />
          <Subheader>UX, Front End Engineer</Subheader>
          <P>{JNCONTENT}</P>
        </ImageDiv>
        <Grid>
          <Row>
            <Column lg={{ offset: 1, span: 1 }} md={1} sm={0}>
              <AboutMe opacity={aboutOpacity} />
            </Column>
          </Row>
          <Row>
            <Column lg={0} md={0}>
              <MobileImageWrapper>
                <Image
                  layout="responsive"
                  height={400}
                  width={300}
                  alt="kb intro picture"
                  src="/images/kb-intro.jpg"
                />
                <Subheader>Artist, Illustrator</Subheader>
                <P>{TTCONTENT}</P>
              </MobileImageWrapper>
            </Column>
          </Row>
          <Row>
            <Column lg={0} md={0}>
              <MobileImageWrapper>
                <Image
                  layout="responsive"
                  height={400}
                  width={300}
                  alt="jn intro picture"
                  src="/images/jn-intro.jpg"
                />
                <Subheader>UX, Front End Engineer</Subheader>
                <P>{JNCONTENT}</P>
              </MobileImageWrapper>
            </Column>
          </Row>
        </Grid>
      </Main>
      <Dots recPos={recPos} />
      <MobileAboutMe />
    </>
  )
}

type AboutOpacity = {
  opacity?: string
}

type DotsType = {
  recPos?: string
}

type ImageType = {
  top?: string
  bottom?: string
}

const MobileImageWrapper = styled.div`
  width: min(300px, 100%);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
`
const Dots = styled.div<DotsType>`
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
`

const Subheader = styled.span`
  font-size: 1rem;
  line-height: 1.25em;
  margin-block-start: 1rem;
`

const ImageDiv = styled.div<ImageType>`
  display: flex;
  flex-direction: column;
  transition: all 1200ms ease-in-out;
  width: min(300px, 50%);
  &.kb-div {
    position: absolute;
    left: 25%;
    top: ${({ top }) => top};
    z-index: 2;

    @media (max-width: 1055px) {
      left: 14%;
    }
  }

  &.jn-div {
    position: absolute;
    left: calc(300px + 35%);
    bottom: ${({ bottom }) => bottom};
    z-index: 1;

    @media (max-width: 1055px) {
      right: 2rem;
      bottom: 10%;
      left: unset;
    }
  }

  @media (max-width: 671px) {
    display: none;
  }
`

const Main = styled.main`
  overflow: hidden;
  position: relative;
  background-color: transparent;
  padding-block: 0;
`
const P = styled.p`
  font-size: 0.875rem;
  line-height: 1.25em;
  padding-block: 1rem 2rem;
`

const MobileAboutMe = styled.div`
  position: fixed;
  display: block;
  left: 1rem;
  width: 0.5rem;
  background-color: black;
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
`

const AboutMe = styled.div<AboutOpacity>`
  position: relative;
  width: 0.5rem;
  background-color: black;
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
`

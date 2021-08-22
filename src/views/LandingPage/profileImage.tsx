import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Column, Row } from "carbon-components-react";
import Image from "next/image";
import styled from "styled-components";
import { oat } from "../../../tokens/tokens";
import {
  ImageLayoutProps,
  OverlayProps,
  ProfileImageProps,
  ProfileImageTypes,
} from "./types";
import styles from "./landing.module.scss";

const OverlayInfo = ({ linkedinName, linkedinUrl }: OverlayProps) => {
  return (
    <Overlay className="overlay">
      <a href={linkedinUrl} rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
        <span>{linkedinName}</span>
      </a>
    </Overlay>
  );
};

const ImageLayout = ({
  title,
  content,
  src,
  linkedinUrl,
  linkedinName,
}: ImageLayoutProps) => {
  return (
    <>
      <Div>
        <Image
          layout="responsive"
          height={400}
          width={400}
          alt="intro picture"
          src={src}
        />
        <OverlayInfo linkedinName={linkedinName} linkedinUrl={linkedinUrl} />
      </Div>
      <Title>{title}</Title>
      {content && <ContentWrapper>{content}</ContentWrapper>}
    </>
  );
};

export const ProfileImage = ({
  top,
  className,
  title,
  content,
  src,
  linkedinName,
  linkedinUrl,
}: ProfileImageProps) => {
  return (
    <>
      <ImageDiv className={className} top={top}>
        <ImageLayout
          title={title}
          content={content}
          src={src}
          linkedinName={linkedinName}
          linkedinUrl={linkedinUrl}
        />
      </ImageDiv>
    </>
  );
};

export const MobileProfileImage = ({
  title,
  content,
  src,
  linkedinName,
  linkedinUrl,
}: ProfileImageProps) => {
  return (
    <Row className={styles.pt100}>
      <Column lg={0} md={0}>
        <MobileImageDiv>
          <ImageLayout
            title={title}
            content={content}
            src={src}
            linkedinName={linkedinName}
            linkedinUrl={linkedinUrl}
          />
        </MobileImageDiv>
      </Column>
    </Row>
  );
};

const Div = styled.div`
  position: relative;
  border: 1px solid black;
  &:hover {
    .overlay {
      height: 100%;
    }
  }
`;

const Overlay = styled.div`
  color: white;
  height: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  transition: height 210ms;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${oat};
    text-shadow: 0px 0px 3px black;

    svg {
      margin-block: 0.5rem;
      font-size: 1.25rem;
    }
  }
`;

const MobileImageDiv = styled.div`
  width: min(300px, 100%);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
`;

const ImageDiv = styled.div<ProfileImageTypes>`
  display: flex;
  flex-direction: column;
  transition: all 1200ms ease-in-out;
  width: min(300px, 50%);
  position: absolute;
  transform: translateX(-50%);

  &.ten {
    left: calc(50% - 200px);
    top: ${({ top }) => top};
    z-index: 2;

    @media (max-width: 880px) {
      left: calc(50% - 105px);
    }
  }

  &.jn {
    left: calc(50% + 200px);
    top: ${({ top }) => top};
    z-index: 1;

    @media (max-width: 880px) {
      left: calc(50% + 205px);
    }
  }

  @media (max-width: 671px) {
    display: none;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    &.jn,
    &.kb {
      top: 5%;
    }
  }

  @media screen and (max-height: 660px) {
    &.jn,
    &.kb {
      top: 5%;
    }
  }
`;

const Title = styled.h3`
  margin-block-start: 1rem;
`;

const ContentWrapper = styled.p`
  line-height: 1.25em;
  padding-block: 1rem 2rem;
`;

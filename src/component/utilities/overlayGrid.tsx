import React from "react";
import styled from "styled-components";
import { Grid, Column } from "carbon-components-react";

export const OverlayGrid = () => {
  return (
    <Main className="bx--content">
      <CustomGrid>
        <Row className="bx--row">
          {[...Array(4)].map((index: number) => (
            <Column key={index}>
              <OverlayColumn />
            </Column>
          ))}
          {[...Array(4)].map((index: number) => (
            <Column key={index} sm={0} md={1} lg={1}>
              <OverlayColumn />
            </Column>
          ))}
          {[...Array(8)].map((index: number) => (
            <Column key={index} sm={0} md={0} lg={1}>
              <OverlayColumn />
            </Column>
          ))}
        </Row>
      </CustomGrid>
    </Main>
  );
};

const Main = styled.main`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  background-color: transparent;
`;

const CustomGrid = styled(Grid)`
  height: 100%;
`;

const Row = styled.div`
  height: 100%;
  span {
    flex: 1;
    height: 100%;
    display: flex;
  }
`;

const OverlayColumn = styled.span`
  background-color: #edf5ff;
`;

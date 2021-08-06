import { Column, Grid, Row } from "carbon-components-react";
import react from "react";
import { OverlayGrid } from "../../src/component/utilities";
import Main from "../../src/layout/Main";

const DashSample = () => {
  return (
    <Main>
      <main className="bx--content">
        <Grid>
          <Row>
            <Column>Hello</Column>
          </Row>
        </Grid>
      </main>
    </Main>
  );
};

export default DashSample;

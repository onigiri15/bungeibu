import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";

import "solid-devtools"

import Routing from "./Routing";

const root = document.getElementById("root");
const metaDescription = "hoge";

render(
  () => (
    <>
      <MetaProvider>
        <Router>
          <Routing metaDescription={metaDescription} />
        </Router>
      </MetaProvider>
    </>
  ),
  root!
);

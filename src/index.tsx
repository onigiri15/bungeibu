import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";

import "solid-devtools"

import Routing from "./Routing";
import Humberger from "./components/Humberger";

const root = document.getElementById("root");
const metaDescription = "hoge";

render(
  () => (
    <>
      <MetaProvider>
        <Humberger />
        <Router>
          <Routing metaDescription={metaDescription} />
        </Router>
      </MetaProvider>
    </>
  ),
  root!
);

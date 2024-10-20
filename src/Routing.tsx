import { lazy } from "solid-js";
import { Route } from "@solidjs/router";

import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const Novel = lazy(() => import("./pages/Novel"));
const Members = lazy(() => import("./pages/Members"));
const News = lazy(() => import("./pages/News"));
const Blog = lazy(() => import("./pages/Blog"));
const SF = lazy(() => import("./pages/SF"));
const SF2024 = lazy(() => import("./pages/sf/2024/SF2024"))
import NotFound from "./pages/NotFound";


const Routing = (props: { metaDescription: string }) => {
  return (
    <>
      <Route
        path="/"
        component={() => <Home metaDescription={props.metaDescription} />}
      />
      <Route
        path="/about"
        component={() => <About metaDescription={props.metaDescription} />}
      />
      <Route
        path="/members"
        component={() => <Members metaDescription={props.metaDescription} />}
      />
      <Route path="/news" component={News} />
      <Route path="/blog" component={Blog} />
      <Route path="/novel" component={Novel} />
      <Route path="/sf">
        <Route path="/" component={SF} />
        <Route path="/2024" component={SF2024} />
      </Route>
      <Route
        path="*"
        component={() => <NotFound metaDescription={props.metaDescription} />}
      />
    </>
  );
};

export default Routing;

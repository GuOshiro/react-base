import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer.component";
import { StaticRouter as Router } from "react-router-dom";

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Footer />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

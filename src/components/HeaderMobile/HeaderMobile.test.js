import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import HeaderMobile from "./HeaderMobile.component";
import { StaticRouter as Router } from 'react-router-dom';

it("render without crashing", () => {
  const div = document.createElement("div");
  render(
    <Router>
      <HeaderMobile />
    </Router>,
    div
  );
  unmountComponentAtNode(div);
});

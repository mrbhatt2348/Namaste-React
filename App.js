import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Raj is here...");
const jsxHeading = <h1>Coming directly from JSX...</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHeading);

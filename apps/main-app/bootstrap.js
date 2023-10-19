import React from "lib-app/react";
import { createRoot } from "lib-app/react-dom/client";

import App from "./App";

const container = document.getElementById("app");

const root = createRoot(container);
root.render(<App />);

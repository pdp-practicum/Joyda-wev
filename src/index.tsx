import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import "assets/style.css";

const root = createRoot(document.getElementById("root")!);

root.render(
	<StrictMode>
		<Main />
	</StrictMode>
);

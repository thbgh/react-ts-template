import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

// const App = React.createElement("div", { title: "这是div的title" }, "我是div的内容");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>
	<App />
);

// function component() {
// 	var element = document.createElement("h3");
// 	element.innerHTML = "Hello, webpack";
// 	return element;
// }
// document.body.appendChild(component());

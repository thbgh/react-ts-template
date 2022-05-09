import React, { useState } from "react";
import { Button, Modal } from "antd";
import AntdComp from "./components/AntdComp";
import "./App.css";
import logo from "./logo.svg";

const App = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" />
			</div>
			{/* <Button type="primary" onClick={showModal}>
				Open Modal
			</Button>
			<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal> */}
			<AntdComp />
		</div>
	);
};

export default App;

import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./index.less";

export default function () {
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
		<div className="antdComp">
			<h3>这是一个antd组件的demo</h3>
			<Button type="primary" onClick={showModal}>
				Open Modal
			</Button>
			<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</div>
	);
}

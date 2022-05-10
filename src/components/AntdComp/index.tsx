import React, {useState} from 'react';
import {Button, Modal} from 'antd';
import styled from 'styled-components';

export default function () {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const fn = (name: string, age: number): string => {
    console.log(`${name}: ${age}`);
    return `${name}: ${age}`;
  };
  const handleOk = () => {
    setIsModalVisible(false);
    fn('thb', 18);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .antdComp {
    // background-color: red;
    text-align: center;
    h3 {
      color: red;
    }
  }
`;

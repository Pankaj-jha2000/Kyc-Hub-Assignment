// src/components/CompareModal.js
import React from 'react';
import { Modal, Table, Button } from 'antd';
import './styles/CompareModal.css';

const CompareModal = ({ isModalOpen, closeModal, products, addProductToCompare, compareList }) => {
  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Brand', dataIndex: 'brand', key: 'brand' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button
          type="primary"
          disabled={compareList.includes(record.id)}
          onClick={() => addProductToCompare(record)}
        >
          Add to Compare
        </Button>
      ),
    },
  ];

  return (
    <Modal
      title="Add More Products"
      visible={isModalOpen}
      onCancel={closeModal}
      footer={null}
      width={800}
      bodyStyle={{ maxHeight: '500px', overflowY: 'auto' }} /* Fixed height */
    >
      <Table
        columns={columns}
        dataSource={products}
        rowKey={(record) => record.id}
        pagination={false}
        scroll={{ y: 400 }} /* Fixed table header */
      />
    </Modal>
  );
};

export default CompareModal;

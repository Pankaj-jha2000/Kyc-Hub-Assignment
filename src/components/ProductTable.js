import React, { useState, useEffect } from 'react';
import { Table, Button, notification } from 'antd';
import './styles/ProductTable.css';

const ProductTable = ({ products, compareList, handleCompare }) => {
  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title', sorter: (a, b) => a.title.localeCompare(b.title), width: 200 },
    { title: 'Price', dataIndex: 'price', key: 'price', sorter: (a, b) => a.price - b.price, width: 100 },
    { title: 'Brand', dataIndex: 'brand', key: 'brand', sorter: (a, b) => a.brand.localeCompare(b.brand), width: 150 },
    { title: 'Category', dataIndex: 'category', key: 'category', width: 150 },
    {
      title: 'Compare',
      key: 'compare',
      render: (text, record) => (
        <Button
          type="primary"
          disabled={compareList.includes(record.id)}
          onClick={() => handleCompare(record)}
        >
          {compareList.includes(record.id) ? 'Added' : 'Compare'}
        </Button>
      ),
      width: 200,
    },
  ];

  return (
    <div className="table-container">
      <Table
        columns={columns}
        dataSource={products}
        rowKey={(record) => record.id}
        pagination={{ pageSize: 10 }}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default ProductTable;

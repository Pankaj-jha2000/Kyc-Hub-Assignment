import React from 'react';
import { useLocation } from 'react-router-dom';
import { Table } from 'antd';

const CompareProducts = () => {
  const location = useLocation();
  const compareList = location.state?.compareList || [];

  const columns = [
    // Define columns for comparison based on the attributes you want to compare
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Brand', dataIndex: 'brand', key: 'brand' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    // Add other columns as needed
  ];

  if (!compareList.length) {
    return <p>No products selected for comparison.</p>;
  }

  return (
    <div>
      <Table columns={columns} dataSource={compareList} rowKey="id" pagination={false} />
    </div>
  );
};

export default CompareProducts;

import React, { useState, useEffect } from 'react';
import { Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import ProductTable from '../components/ProductTable';
import CompareModal from '../components/CompareModal';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [compareList, setCompareList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleCompare = (product) => {
    if (compareList.length < 4) {
      setCompareList([...compareList, product.id]);
      notification.success({ message: 'Product added to compare.' });
    } else {
      notification.error({ message: 'You can compare up to 4 products only.' });
    }
  };

  const addProductToCompare = (product) => {
    if (!compareList.includes(product.id) && compareList.length < 4) {
      setCompareList([...compareList, product.id]);
    }
  };

  const compareProducts = () => {
    if (compareList.length >= 2) {
      navigate('/compare', { state: { compareList } });
    } else {
      notification.warning({ message: 'Select at least 2 products to compare.' });
    }
  };

  return (
    <div>
      <ProductTable products={products} compareList={compareList} handleCompare={handleCompare} />
      <Button onClick={() => setIsModalOpen(true)}>Add More Products</Button>
      <Button type="primary" onClick={compareProducts} disabled={compareList.length < 2}>
        Compare Selected Products
      </Button>
      <CompareModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        products={products}
        addProductToCompare={addProductToCompare}
        compareList={compareList}
      />
    </div>
  );
};

export default ProductDetails;

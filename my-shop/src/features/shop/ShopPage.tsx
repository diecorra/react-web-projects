import { Product } from '@/model/product';
import { useEffect, useState } from 'react';
import { pb } from '../../pocketbase';
import { ProductCard } from './components/ProductCard';
import { ServerError, Spinner } from '@/shared/';

export const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    setError(false);
    setPending(true);
    pb.collection('products')
      .getList<Product>()
      .then((res) => {
        setProducts(res.items);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setPending(false);
      });
  }

  function addToCard(product: Partial<Product>) {
    console.log(product);
  }

  return (
    <div>
      <h1 className="title">SHOP</h1>
      {pending && <Spinner />}
      {error && <ServerError />}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {products.map((p) => {
          return <ProductCard key={p.id} product={p} onAddToCard={addToCard} />;
        })}
      </div>
    </div>
  );
};

export default ShopPage;

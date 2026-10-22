interface FullProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discount?: number;
  inStock: boolean;
}

type ProductPreview = Pick<FullProduct, 'title' | 'price'>;

type ProductCreate = Omit<FullProduct, 'id'>;

type ProductUpdate = Partial<ProductCreate>;

export const UtilityTypes = () => {
  const preview: ProductPreview = {
    title: 'Смартфон',
    price: 500,
  };

  const updateData: ProductUpdate = {
    price: 450
  };

  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', marginBottom: '10px' }}>
      <h3>Задание 2: Utility Types</h3>
      <p><b>Preview Title:</b> {preview.title}, Цена: ${preview.price}</p>
      <p><b>Update Data (partial price):</b> ${updateData.price}</p>
    </div>
  );
};
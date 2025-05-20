import Category from "../interfces/categoryInterface";
import Product from "../interfces/productInterface";

// utils/fetchData.ts
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchData = async (
  setProducts: (products: Product[]) => void,
  setCategories: (categories: Category[]) => void
) => {
  try {
    const token = localStorage.getItem('adminToken') || '';

    const [productRes, categoryRes] = await Promise.all([
      fetch(`${apiUrl}/admin/products`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
      fetch(`${apiUrl}/admin/categories`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ]);

    if (productRes.ok) {
      const result = await productRes.json();
      setProducts(result.data);
    }

    if (categoryRes.ok) {
      const result = await categoryRes.json();
      setCategories(result.data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

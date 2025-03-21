// app/admin/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Switch } from '@mui/material';
import AdminLayout from '@/app/components/adminLayout';
import ProductForm from '@/app/components/productForm';
import CategoryForm from '@/app/components/categoryForm';

interface Product {
  _id: string;
  name: string;
  price: number;
  category: { _id: string; name: string };
  isBlocked: boolean;
}

interface Category {
  _id: string;
  name: string;
  isBlocked: boolean;
}

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [editCategory, setEditCategory] = useState<Category | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem('adminToken');
    const [productRes, categoryRes] = await Promise.all([
      fetch('/backend/products', { headers: { Authorization: `Bearer ${token}` } }),
      fetch('/backend/categories', { headers: { Authorization: `Bearer ${token}` } }),
    ]);
    if (productRes.ok) setProducts(await productRes.json());
    if (categoryRes.ok) setCategories(await categoryRes.json());
  };

  const addProduct = async (data: { name: string; price: number; category: string }) => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch('/backend/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const newProduct = await res.json();
      setProducts([...products, newProduct]);
    }
  };

  const updateProduct = async (id: string, data: { name: string; price: number; category: string }) => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch(`/backend/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const updatedProduct = await res.json();
      setProducts(products.map((p) => (p._id === id ? updatedProduct : p)));
      setEditProduct(null);
    }
  };

  const toggleProductBlock = async (id: string, isBlocked: boolean) => {
    const token = localStorage.getItem('adminToken');
    await fetch(`/backend/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ isBlocked: !isBlocked }),
    });
    setProducts(products.map((p) => (p._id === id ? { ...p, isBlocked: !isBlocked } : p)));
  };

  const deleteProduct = async (id: string) => {
    const token = localStorage.getItem('adminToken');
    await fetch(`/backend/products/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    setProducts(products.filter((p) => p._id !== id));
  };

  const addCategory = async (data: { name: string }) => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch('/backend/categories/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const newCategory = await res.json();
      setCategories([...categories, newCategory]);
    }
  };

  const updateCategory = async (id: string, data: { name: string }) => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch(`/backend/categories/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const updatedCategory = await res.json();
      setCategories(categories.map((c) => (c._id === id ? updatedCategory : c)));
      setEditCategory(null);
    }
  };

  const toggleCategoryBlock = async (id: string, isBlocked: boolean) => {
    const token = localStorage.getItem('adminToken');
    await fetch(`/backend/categories/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ isBlocked: !isBlocked }),
    });
    setCategories(categories.map((c) => (c._id === id ? { ...c, isBlocked: !isBlocked } : c)));
  };

  const deleteCategory = async (id: string) => {
    const token = localStorage.getItem('adminToken');
    await fetch(`/backend/categories/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    setCategories(categories.filter((c) => c._id !== id));
  };

  return (
    <AdminLayout>
      <h2>Manage Products</h2>
      {editProduct ? (
        <ProductForm
          onSubmit={(data) => updateProduct(editProduct._id, data)}
          initialData={editProduct}
          categories={categories.filter((c) => !c.isBlocked)}
        />
      ) : (
        <ProductForm onSubmit={addProduct} categories={categories.filter((c) => !c.isBlocked)} />
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Blocked</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.category?.name || 'N/A'}</TableCell>
              <TableCell>
                <Switch
                  checked={product.isBlocked}
                  onChange={() => toggleProductBlock(product._id, product.isBlocked)}
                />
              </TableCell>
              <TableCell>
                <Button onClick={() => setEditProduct(product)}>Edit</Button>
                <Button onClick={() => deleteProduct(product._id)} color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h2>Manage Categories</h2>
      {editCategory ? (
        <CategoryForm onSubmit={(data) => updateCategory(editCategory._id, data)} initialData={editCategory} />
      ) : (
        <CategoryForm onSubmit={addCategory} />
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Blocked</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category._id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>
                <Switch
                  checked={category.isBlocked}
                  onChange={() => toggleCategoryBlock(category._id, category.isBlocked)}
                />
              </TableCell>
              <TableCell>
                <Button onClick={() => setEditCategory(category)}>Edit</Button>
                <Button onClick={() => deleteCategory(category._id)} color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AdminLayout>
  );
}
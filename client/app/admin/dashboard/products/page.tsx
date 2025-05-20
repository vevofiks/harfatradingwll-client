'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Switch,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import ProductForm from '@/app/components/productForm';




export default function ProductsPage() {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const fetchCategories = async () => {
    const token = localStorage.getItem('adminToken') || '';
    const res = await fetch(`${apiUrl}/admin/categories`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  
    if (res.ok) {
      const result = await res.json();
      setCategories(result.data);
    } else {
      console.error('Failed to fetch categories');
    }
  };
  
  
    useEffect(() => {
      fetchCategories();
    }, []);
    const [products, setProducts] = useState<Product[]>();
    const [categories, setCategories] = useState<Category[]>([]);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  

  const addProduct = async (data: { name: string; description:string; category: string }) => {
    const token = localStorage.getItem('adminToken') || '';
    const res = await fetch('/admin/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const newProduct = await res.json();
      setProducts([...products, newProduct]);
      setModalOpen(false);
    }
  };

  const updateProduct = async (id: string, data: { name: string; description:string; category: string }) => {
    const token = localStorage.getItem('adminToken') || '';
    const res = await fetch(`/admin/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const updatedProduct = await res.json();
      setProducts(products.map((p) => (p._id === id ? updatedProduct : p)));
      setEditProduct(null);
      setModalOpen(false);
    }
  };

  const toggleProductBlock = async (id: string, isBlocked: boolean) => {
    const token = localStorage.getItem('adminToken') || '';
    await fetch(`/admin/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ isBlocked: !isBlocked }),
    });
    setProducts(products.map((p) => (p._id === id ? { ...p, isBlocked: !isBlocked } : p)));
  };

  const deleteProduct = async (id: string) => {
    const token = localStorage.getItem('adminToken') || '';
    await fetch(`/admin/products/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    setProducts(products.filter((p) => p._id !== id));
  };

  const handleOpenModalForAdd = () => {
    setEditProduct(null);
    setModalOpen(true);
  };

  const handleOpenModalForEdit = (product: Product) => {
    setEditProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditProduct(null);
    setModalOpen(false);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>Manage Products</Typography>

      <Button variant="contained" color="primary" onClick={handleOpenModalForAdd} sx={{ mb: 2 }}>
        Add Product
      </Button>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid size={{xs:12,sm:6 ,md:4}} key={product._id}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
  <CardContent>
    <img
      src={product.image || 'https://via.placeholder.com/300x200?text=No+Image'}
      alt={product.name}
      style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }}
    />
    <Typography variant="h6" gutterBottom>{product.name}</Typography>
    <Typography color="text.secondary" gutterBottom>Description: {product.description}</Typography>
    <Typography color="text.secondary" gutterBottom>Category: {product.category?.name || 'N/A'}</Typography>
    <Typography color="text.secondary">Status: {product.isBlocked ? 'Blocked' : 'Active'}</Typography>
                <Switch
                  checked={product.isBlocked}
                  onChange={() => toggleProductBlock(product._id, product.isBlocked)}
                  color="primary"
                />
  </CardContent>
  <CardActions>
    <Button size="small" onClick={() => handleOpenModalForEdit(product)}>Edit</Button>
    <Button size="small" color="error" onClick={() => deleteProduct(product._id)}>Delete</Button>
  </CardActions>
</Card>

          </Grid>
        ))}
      </Grid>

      <Dialog open={modalOpen} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle>{editProduct ? 'Edit Product' : 'Add Product'}</DialogTitle>
        <DialogContent>
          <ProductForm
            onSubmit={(data) =>
              editProduct ? updateProduct(editProduct._id, data) : addProduct(data)
            }
            initialData={editProduct || { _id: '', name: '', description: '', image: '', category: { _id: '', name: '' }, isBlocked: false }}
            categories={categories.filter((c) => !c.isBlocked)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

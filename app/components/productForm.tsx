// components/ProductForm.tsx
'use client';

import { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

interface ProductFormProps {
  onSubmit: (data: { name: string; price: number; category: string }) => void;
  initialData?: { _id?: string; name?: string; price?: number; category?: { _id: string; name: string } };
  categories: { _id: string; name: string }[];
}

export default function ProductForm({ onSubmit, initialData = {}, categories }: ProductFormProps) {
  const [name, setName] = useState(initialData.name || '');
  const [price, setPrice] = useState(initialData.price || '');
  const [category, setCategory] = useState(initialData.category?._id || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, price: Number(price), category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <MenuItem key={cat._id} value={cat._id}>
              {cat.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" fullWidth>
        {initialData._id ? 'Update Product' : 'Add Product'}
      </Button>
    </form>
  );
}
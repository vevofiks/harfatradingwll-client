'use client';

import { useEffect, useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Typography, Box } from '@mui/material';

interface ProductFormProps {
  onSubmit: (data: { name: string; description: string; image: string; category: string }) => void;
  initialData?: {
    _id?: string;
    name?: string;
    description?: string;
    image?: string;
    category?: { _id: string; name: string };
  };
  categories: { _id: string; name: string }[];
}

export default function ProductForm({ onSubmit, initialData = {}, categories }: ProductFormProps) {
  const [name, setName] = useState(initialData.name || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [category, setCategory] = useState(initialData.category?._id || '');
  const [image, setImage] = useState(initialData.image || '');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, image, category });
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
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={3}
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

      <Box marginY={2}>
        {image ? (
          <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
            <img src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8 }} />
            <Button variant="outlined" color="secondary" onClick={handleRemoveImage}>
              Remove Image
            </Button>
          </Box>
        ) : (
          <Button variant="outlined" component="label" fullWidth>
            Upload Image
            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
          </Button>
        )}
      </Box>

      <Button type="submit" variant="contained" fullWidth>
        {initialData._id ? 'Update Product' : 'Add Product'}
      </Button>
    </form>
  );
}

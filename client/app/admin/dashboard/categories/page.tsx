'use client';

import { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableRow, 
  Button, Switch, Modal, Box, Typography, IconButton,
  Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InboxIcon from '@mui/icons-material/Inbox';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CategoryForm from '@/app/components/categoryForm';
import { motion } from 'framer-motion';

interface Category {
  _id: string;
  name: string;
  isBlocked?: boolean;
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editCategory, setEditCategory] = useState<Category | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
  

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditCategory(null);
  };

  const token = localStorage.getItem('adminToken') || '';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

const handleResponse = async (res: Response) => {
  const json = await res.json();
  if (!res.ok) {
    console.error('API Error:', json?.message || 'Unknown error');
    throw new Error(json?.message || 'Something went wrong');
  }
  return json;
};

// ✅ Add Category
const addCategory = async (data: { name: string }) => {
  try {
    const res = await fetch(`${apiUrl}/admin/category/add`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    const result = await handleResponse(res);
    setCategories([...categories, result.category]); // Make sure backend returns `category`
    handleCloseModal();
  } catch (error) {
    console.error('Add Category Error:', error);
  }
};

const updateCategory = async (id: string, data: { name: string }) => {
  try {
    const res = await fetch(`${apiUrl}/admin/category/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    });
    const result = await handleResponse(res);
    setCategories(categories.map((c) => (c._id === id ? result.data : c)));
    handleCloseModal();
  } catch (error) {
    console.error('Update Category Error:', error);
  }
};

// ✅ Block / Unblock Category
const toggleCategoryBlock = async (id: string) => {
  const token = localStorage.getItem('adminToken') || '';
  const res = await fetch(`${apiUrl}/admin/category/block/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.ok) {
    const result = await res.json();
    const updatedCategory = result.data; // ✅ use "data" instead of "category"
    setCategories(categories.map((c) => (c._id === id ? updatedCategory : c)));
  }
};
;

// ✅ Delete Category
const deleteCategory = async (id: string) => {
  try {
    const res = await fetch(`${apiUrl}/admin/category/${id}`, {
      method: 'DELETE',
      headers: { Authorization: headers.Authorization },
    });
    await handleResponse(res);
    setCategories(categories.filter((c) => c._id !== id));
  } catch (error) {
    console.error('Delete Category Error:', error);
  }
};

const handleEditClick = (category: Category) => {
  setEditCategory(category);
  setOpenModal(true);
};

  return (
    <div>
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
      <Typography variant="h4">Manage Categories</Typography>
      {categories.length > 0 && (
         <Button 
         variant="contained" 
         onClick={handleOpenModal}
         sx={{ mb: 2 }}
         startIcon={<AddIcon />}
       >
         Add Category
       </Button>
      )}
     
    </Box>
    <Modal
  open={openModal}
  onClose={handleCloseModal}
  aria-labelledby="modal-modal-title"
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: 2, // Add padding on mobile
  }}
>
  <Box 
    sx={{
      position: 'relative',
      width: '100%',
      maxWidth: { xs: '100%', sm: 500, md: 600 }, 
      maxHeight: '90vh',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: { xs: 2, sm: 3, md: 4 },
      borderRadius: 2,
      overflowY: 'auto',
    }}
  >
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      mb={2}
      position="sticky"
      top={0}
      bgcolor="background.paper"
      zIndex={1}
      pt={1}
      pb={2}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {editCategory ? 'Edit Category' : 'Add New Category'}
      </Typography>
      <IconButton 
        onClick={handleCloseModal}
        sx={{
          position: { xs: 'fixed', sm: 'relative' },
          right: { xs: 16, sm: 0 },
          top: { xs: 16, sm: 0 },
          bgcolor: { xs: 'background.paper', sm: 'transparent' },
          boxShadow: { xs: 1, sm: 0 },
        }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
    
    <Box sx={{ mt: 2 }}>
      <CategoryForm
        onSubmit={editCategory ? 
          (data) => updateCategory(editCategory._id, data) : 
          addCategory
        }
        initialData={editCategory || undefined}
      />
    </Box>
  </Box>
</Modal>
  
    {categories.length > 0 ? (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow 
              key={category._id}
              sx={{
                '&:hover': { backgroundColor: 'action.hover' },
                transition: 'background-color 0.3s ease'
              }}
            >
              <TableCell>{category.name}</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Switch
                    checked={category.isBlocked}
                    onChange={() => toggleCategoryBlock(category._id)}
                    color={category.isBlocked ? 'error' : 'success'}
                  />
                  <Typography ml={1}>
                    {category.isBlocked ? 'Blocked' : 'Active'}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Button 
                  onClick={() => handleEditClick(category)}
                  sx={{ mr: 1 }}
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
                <Button 
                  onClick={() => deleteCategory(category._id)} 
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper 
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            mt: 4
          }}
          elevation={3}
        >
          <InboxIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            No Categories Found
          </Typography>
          <Typography color="text.secondary" mb={3}>
            You haven't created any categories yet. Start by adding your first category.
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpenModal}
            startIcon={<AddIcon />}
            size="large"
          >
            Add Category
          </Button>
        </Paper>
      </motion.div>
    )}
  </div>
  );
}
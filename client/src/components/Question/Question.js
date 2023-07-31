import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';

const Question = ({ q, a, user }) => {
  const [open, setOpen] = useState(false);

  const handleAChange = () => {
    setOpen(!open);
  };

  return (
    <Box className='sQ' mb={2} p={2} boxShadow={3}>
      <TextField
        label={user ? `${user.username} שואל:` : ''}
        onClick={handleAChange}
        value={q}
        fullWidth
        InputProps={{
          readOnly: true,
        }}
        color="secondary"
        multiline
        rows={5}
      />

      {open && (
        <Box mt={2}>
          <Typography variant="h5">תשובה:</Typography>
          <TextField
            value={a}
            InputProps={{
              readOnly: true,
            }}
            color="secondary"
            focused
            multiline
            fullWidth
            rows={5}
          />
        </Box>
      )}
    </Box>
  );
};

export default Question;
import React, { useState } from 'react';
import { TextField, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Question = ({ q, a, user }) => {
  const [open, setOpen] = useState(false);

  const handleAChange = () => {
    setOpen(!open);
  };

  return (
    <Box className='sQ' mb={2} p={2} boxShadow={3} display={"flex"} flexDirection={"column"} alignItems={"center"}>
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
      {q === "אין שאלה כזאת" ? <Link to={"/AskQuestion"}><Button size='small' color="secondary" variant='contained'>לשליחת שאלה לחץ כאן</Button></Link>: <div></div>}
    </Box>
  );
};

export default Question;
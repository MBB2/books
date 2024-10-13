import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddLivre({ livres, setLivres }) {
  const [newLivre, setNewLivre] = useState({ title: '', author: '' });
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleAddLivre = () => {
    if (!newLivre.title || !newLivre.author) {
      setError('Both title and author are required'); 
      
      return;
    }

    
    setLivres([...livres, newLivre]);
    setNewLivre({ title: '', author: '' });
    setError('');
    navigate('/list');
  };

  return (
    <div>
      <h2>Ajouter Livre</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} 
      <input
        type="text"
        placeholder="Title"
        value={newLivre.title}
        onChange={(e) => setNewLivre({ ...newLivre, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={newLivre.author}
        onChange={(e) => setNewLivre({ ...newLivre, author: e.target.value })}
      />
      <button onClick={handleAddLivre}>Ajouter Livre</button>
    </div>
  );
}



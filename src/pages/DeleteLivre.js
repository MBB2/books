import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function DeleteLivre({ livres, setLivres }) {
  const { index } = useParams();
  const navigate = useNavigate();

  const handleDeleteLivre = () => {
    const updatedLivres = livres.filter((_, i) => i !== parseInt(index, 10));
    setLivres(updatedLivres);
    navigate('/list');
  };

  const handleCancel = () => {
    navigate('/list');
  };


  return (
    <div>
      <h2>Supprimer Livre</h2>
      <p>
        Voulez vous Supprimer cette Livre "{livres[index].title}" --- {livres[index]?.author}?
      </p>
      <button onClick={handleDeleteLivre}>Oui, Supprimer</button>
      <button style={{ backgroundColor: '#dc3545', color: 'white' }} onClick={handleCancel}>Non</button>
      </div>
  );
}


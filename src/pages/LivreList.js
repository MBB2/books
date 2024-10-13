import React from 'react';
import { Link } from 'react-router-dom';

export default function LivreList({ livres, setLivres }) {
  return (
    <div>
      <h2>Liste des Livres</h2> 
      {livres.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Titre</th>
              <th>Auteurs</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {livres.map((livre, index) => (
              <tr key={index}>
                <td data-label="Id">{livre.id}</td>
                <td data-label="Title">{livre.title}</td>
                <td data-label="Author">{livre.author}</td>
                <td className="action-buttons" data-label="Actions">
                  <Link to={`/edit/${index}`}>
                    <button className="edit">Editer</button>
                  </Link>
                  <Link to={`/delete/${index}`}>
                    <button className="delete">Supprimer</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Non Livre Trouvé</p>
      )}
    </div>
  );
}


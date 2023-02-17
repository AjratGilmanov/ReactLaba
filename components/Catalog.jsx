import React, { useState, useEffect } from 'react';

function Catalog({ onAddToCart }) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchpets = async () => {
      const response = await fetch(
        'https://petstore.swagger.io/v2/pet/findByStatus?status=pending'
      );
      const data = await response.json();
      setPets(data);
    };
    fetchpets();
  }, []);

  
  const handleAddToCart = (pets) => {
    onAddToCart(pets);
  };
  return (
    <div>
      <h2>Catalog of Available Pets</h2>
            <div>
              {pets.map((pet) => (
                <div key={pet.id} pet={pet} onAddToCart={onAddToCart} />
              ))}
            </div>
          <button onClick={() => handleAddToCart(pets)}>Add to Cart</button>
        </div>
      )}


export default Catalog;

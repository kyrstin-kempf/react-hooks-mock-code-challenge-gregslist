import React, { useState } from "react";

function ListingCard({ listings, deleteListing }) {
  const { id, description, location, image } = listings
  const [favorite, setFavorite] = useState(false);

// TOGGLE FAVORITES ---------------------------------
  function handleFavoriteEvent() {
    setFavorite(!favorite)
  }

// DELETE -------------------------------------------
  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => deleteListing(id));
  }

  return ( 
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavoriteEvent} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteEvent} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

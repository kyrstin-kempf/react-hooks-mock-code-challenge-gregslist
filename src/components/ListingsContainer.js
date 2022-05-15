import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing }) {
  const { id, description, location, image } = listings


  const listingsList = listings.map((listing) => (
    <ListingCard 
    key={listing.id}
    listings={listing}
    deleteListing={deleteListing}
    />
  ));

  return (
    <main>
      <ul className="cards">
        {listingsList}
      </ul>
    </main>
  );
}

export default ListingsContainer;

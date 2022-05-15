import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState("");

  function deleteListing(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((listing) => setListings(listing));
  }, []);

  const searchListings = listings.filter((listing) => listing.description.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="app">
      <Header setQuery={setQuery}/>
      <ListingsContainer deleteListing={deleteListing} listings={searchListings} /> 
    </div>
  );
}

export default App;

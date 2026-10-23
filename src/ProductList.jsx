
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2bcb" },
      { id: 2, name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee" },
      { id: 3, name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333" },
      { id: 4, name: "Areca Palm", price: 22, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78" },
      { id: 5, name: "Rubber Plant", price: 20, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
      { id: 6, name: "Boston Fern", price: 16, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" },
    ],
  },
  {
    category: "Succulents and Cacti",
    plants: [
      { id: 7, name: "Aloe Vera", price: 10, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
      { id: 8, name: "Echeveria", price: 9, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a" },
      { id: 9, name: "Jade Plant", price: 14, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
      { id: 10, name: "Moon Cactus", price: 8, image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e" },
      { id: 11, name: "String of Pearls", price: 17, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" },
      { id: 12, name: "Haworthia", price: 11, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a" },
    ],
  },
  {
    category: "Decorative Foliage Plants",
    plants: [
      { id: 13, name: "Monstera", price: 25, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },
      { id: 14, name: "Golden Pothos", price: 13, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" },
      { id: 15, name: "Calathea", price: 19, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
      { id: 16, name: "Philodendron", price: 21, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411" },
      { id: 17, name: "Chinese Evergreen", price: 18, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
      { id: 18, name: "Fiddle Leaf Fig", price: 28, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#243b2a" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          padding: "18px 5%",
          backgroundColor: "#245c36",
          color: "white",
        }}
      >
        <h2 style={{ margin: 0 }}>Paradise Nursery</h2>

        <div style={{ display: "flex", gap: "22px" }}>
          <a href="#home" style={{ color: "white" }}>Home</a>
          <a href="#plants" style={{ color: "white" }}>Plants</a>
          <a href="#cart" style={{ color: "white" }}>
            🛒 Cart ({cartCount})
          </a>
        </div>
      </nav>

      <header
        id="plants"
        style={{
          textAlign: "center",
          padding: "35px 15px",
          backgroundColor: "#edf5e9",
        }}
      >
        <h1>Our Houseplants</h1>
        <p>Bring home a little nature with Paradise Nursery.</p>
      </header>

      <main style={{ padding: "25px 5%" }}>
        {plantCategories.map((group) => (
          <section key={group.category} style={{ marginBottom: "45px" }}>
            <h2>{group.category}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(190px, 1fr))",
                gap: "22px",
              }}
            >
              {group.plants.map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <article
                    key={plant.id}
                    style={{
                      border: "1px solid #dce5d8",
                      borderRadius: "12px",
                      padding: "15px",
                      textAlign: "center",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                    }}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: "100%",
                        height: "170px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />

                    <h3>{plant.name}</h3>
                    <p>
                      <strong>${plant.price.toFixed(2)}</strong>
                    </p>

                    <button
                      type="button"
                      disabled={isAdded}
                      onClick={() => handleAddToCart(plant)}
                      style={{
                        padding: "10px 16px",
                        border: "none",
                        borderRadius: "6px",
                        backgroundColor: isAdded ? "#999" : "#287a42",
                        color: "white",
                        cursor: isAdded ? "not-allowed" : "pointer",
                      }}
                    >
                      {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;

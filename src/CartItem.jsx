
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Checkout Coming Soon!");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#243b2a",
        minHeight: "100vh",
      }}
    >
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
            🛒 Cart ({cartItems.reduce(
              (total, item) => total + item.quantity,
              0
            )})
          </a>
        </div>
      </nav>

      <main style={{ padding: "30px 5%" }} id="cart">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <h2>Your cart is empty!</h2>
            <p>Discover beautiful plants for your home.</p>
            <a href="#plants">
              <button type="button">Continue Shopping</button>
            </a>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <article
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "20px",
                  padding: "20px 0",
                  borderBottom: "1px solid #dce5d8",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "110px",
                    height: "110px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <div style={{ flex: "1", minWidth: "150px" }}>
                  <h3>{item.name}</h3>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p>
                    Item total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleDecrease(item)}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() => handleIncrease(item)}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  style={{
                    backgroundColor: "#b3261e",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "9px 14px",
                  }}
                >
                  Delete
                </button>
              </article>
            ))}

            <section style={{ textAlign: "right", marginTop: "30px" }}>
              <h2>Total: ${totalAmount.toFixed(2)}</h2>

              <button
                type="button"
                onClick={handleCheckout}
                style={{
                  backgroundColor: "#287a42",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  padding: "12px 20px",
                  marginRight: "12px",
                  cursor: "pointer",
                }}
              >
                Checkout
              </button>

              <a href="#plants">
                <button type="button">Continue Shopping</button>
              </a>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;

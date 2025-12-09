function Card({ title, description, category }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "10px",
        width: "250px"
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <small><b>Category:</b> {category}</small>
    </div>
  );
}

export default Card;
  
export default function ItemCard({ item, onDelete, onToggle }) {
  return (
    <div className="card p-3 mb-3 shadow-sm">
      <h5 className={item.completed ? "text-decoration-line-through" : ""}>
        {item.title}
      </h5>
      <p className="mb-1">Amount: ₹{item.amount}</p>
      <p className="mb-2">Date: {item.date}</p>

      <button
        className="btn btn-success me-3"
        onClick={() => onToggle(item.id)}
      >
        {item.completed ? "Undo" : "Mark Complete"}
      </button>

      <button className="btn btn-danger" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}

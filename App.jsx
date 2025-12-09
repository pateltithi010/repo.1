import Card from "./components/Card";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Card
        title="React Basics"
        description="Learn components, props, and JSX."
        category="Programming"
      />

      <Card
        title="Travel Guide"
        description="Best places to visit in 2025."
        category="Travel"
      />

      <Card
        title="Food Recipe"
        description="How to cook delicious pasta."
        category="Cooking"
      />
    </div>
  );
}

export default App;


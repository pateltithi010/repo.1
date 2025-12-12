export default function Navbar({ setPage }) {
  return (
    <div className="d-flex justify-content-center gap-4 mt-3">
      <button className="btn btn-outline-dark btn-lg" onClick={() => setPage("Home")}>
        Home
      </button>
      <button className="btn btn-outline-dark btn-lg" onClick={() => setPage("About")}>
        About
      </button>
      <button className="btn btn-outline-dark btn-lg" onClick={() => setPage("Project")}>
        Project
      </button>
    </div>
  );
}

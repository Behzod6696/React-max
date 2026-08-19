import { useNavigate } from "react-router-dom";
import api from "./axios";
import KinoForm from "./components/KinoForm/KinoForm";

function AddMovie() {
  const navigate = useNavigate();

  const handleAddMovie = async (movieData) => {
    try {
      await api.post("/kinolar", movieData);
      navigate("/catalog");
    } catch (error) {
      alert("Film qo'shishda xatolik yuz berdi");
    }
  };

  return (
    <main className="container section">
      <div className="form-container">
        <h1>Yangi film qo'shish</h1>
        <KinoForm onSubmit={handleAddMovie} buttonText="Filmni qo'shish" />
      </div>
    </main>
  );
}

export default AddMovie;
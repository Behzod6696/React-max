import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./axios";
import Loading from "./components/Loading";
import Error from "./components/Error";
import KinoForm from "./components/KinoForm/KinoForm";

function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await api.get(`/kinolar/${id}`);
        setMovie(response.data);
      } catch (error) {
        setError("Filmni olishda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [id]);

  const handleUpdate = async (movieData) => {
    try {
      await api.patch(`/kinolar/${id}`, movieData);
      navigate(`/movie/${id}`);
    } catch (error) {
      alert("Filmni yangilashda xatolik yuz berdi");
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <main className="container section">
      <div className="form-container">
        <h1>Filmni tahrirlash</h1>
        <KinoForm initialData={movie} onSubmit={handleUpdate} buttonText="Saqlash" />
      </div>
    </main>
  );
}

export default EditMovie;
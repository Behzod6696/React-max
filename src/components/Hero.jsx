import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../axios";
import Loading from "./Loading";
import Error from "./Error";
import "./Hero.css"

function Hero() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const response = await api.get(
          `/kinolar/${id}`
        );

        setMovie(response.data);
      } catch (error) {
        setError("Film topilmadi");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Bu filmni o'chirishni xohlaysizmi?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await api.delete(`/kinolar/${id}`);

      navigate("/catalog");
    } catch (error) {
      alert("O'chirishda xatolik yuz berdi");
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <main className="container section">
      <div className="detail-page">
        <iframe
          src={movie.trailerUrl}
          alt={movie.title}
          className="detail-image"
        />

        <div className="detail-content">
          <span className="badge">
            {movie.genre}
          </span>

          <h1>{movie.title}</h1>

          <div className="detail-rating">
            ⭐ {movie.rating} / 10
          </div>

          <p>{movie.description}</p>

          <div className="movie-info">
            <div>
              <strong>Yil:</strong>
              <span>{movie.year}</span>
            </div>

            <div>
              <strong>Davomiyligi:</strong>
              <span>{movie.duration} daqiqa</span>
            </div>

            <div>
              <strong>Janr:</strong>
              <span>{movie.genre}</span>
            </div>
          </div>

          <div className="detail-actions">
            <Link
              to={`/edit/${movie.id}`}
              className="edit-btn"
            >
              Tahrirlash
            </Link>

            <button
              onClick={handleDelete}
              className="delete-btn"
            >
              O'chirish
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
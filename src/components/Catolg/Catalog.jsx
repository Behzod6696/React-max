import { useMemo, useReducer } from "react";
import useFetch from "../../Fetch";
import api from "../../axios";
import filterReducer, { initialState } from "../../Filterredus";
import Loading from "../Loading";
import Error from "../Error";
import MoveCard from "../MoveCard";
import "./Catalog.css";

function Catalog() {
  const { data: kinolar, loading, error } = useFetch("/kinolar");
  const [filterState, dispatch] = useReducer(filterReducer, initialState);

  const genres = ["All", ...new Set(kinolar.map((kino) => kino.genre))];

  const filteredMovies = useMemo(() => {
    let result = [...kinolar];

    if (filterState.genre !== "All") {
      result = result.filter((kino) => kino.genre === filterState.genre);
    }
    if (filterState.minRating > 0) {
      result = result.filter((kino) => kino.rating >= filterState.minRating);
    }
    if (filterState.search.trim()) {
      result = result.filter((kino) =>
        kino.title.toLowerCase().includes(filterState.search.toLowerCase())
      );
    }
    if (filterState.sort === "rating-desc") result.sort((a, b) => b.rating - a.rating);
    if (filterState.sort === "rating-asc")  result.sort((a, b) => a.rating - b.rating);
    if (filterState.sort === "year-desc")   result.sort((a, b) => b.year - a.year);
    if (filterState.sort === "year-asc")    result.sort((a, b) => a.year - b.year);

    return result;
  }, [kinolar, filterState]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Bu filmni o'chirishni xohlaysizmi?");
    if (!confirmed) return;
    try {
      await api.delete(`/kinolar/${id}`);
      window.location.reload();
    } catch (error) {
      alert("Filmni o'chirishda xatolik yuz berdi");
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <main className="container section">
      <h1>Filmlar katalogi</h1>

      <div className="filters">
        <div className="filter-group">
          <label>Qidirish</label>
          <input
            type="text"
            value={filterState.search}
            onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
            placeholder="Film nomini yozing..."
          />
        </div>

        <div className="filter-group">
          <label>Janr</label>
          <select
            value={filterState.genre}
            onChange={(e) => dispatch({ type: "SET_GENRE", payload: e.target.value })}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Minimal rating</label>
          <select
            value={filterState.minRating}
            onChange={(e) => dispatch({ type: "SET_MIN_RATING", payload: e.target.value })}
          >
            <option value="0">Barchasi</option>
            <option value="5">5+</option>
            <option value="6">6+</option>
            <option value="7">7+</option>
            <option value="8">8+</option>
            <option value="9">9+</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Saralash</label>
          <select
            value={filterState.sort}
            onChange={(e) => dispatch({ type: "SET_SORT", payload: e.target.value })}
          >
            <option value="default">Standart</option>
            <option value="rating-desc">Rating: yuqoridan</option>
            <option value="rating-asc">Rating: pastdan</option>
            <option value="year-desc">Yangi filmlar</option>
            <option value="year-asc">Eski filmlar</option>
          </select>
        </div>

        <button className="reset-btn" onClick={() => dispatch({ type: "RESET_FILTERS" })}>
          Tozalash
        </button>
      </div>

      <p className="result-count">Natija: {filteredMovies.length} ta film</p>

      {filteredMovies.length === 0 ? (
        <div className="empty">
          <h3>Film topilmadi</h3>
          <p>Filter yoki qidiruvni o'zgartirib ko'ring.</p>
        </div>
      ) : (
        <div className="movie-grid">
          {filteredMovies.map((kino) => (
            <MoveCard key={kino.id} move={kino} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Catalog;
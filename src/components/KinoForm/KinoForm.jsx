import { useEffect, useState } from "react";
import "./KinoForm.css"
const initialForm = {
  title: "",
  description: "",
  trailerUrl: "",
  rating: "",
  genre: "",
  year: "",
  duration: ""
};

function KinoForm({ initialData, onSubmit, buttonText }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title || "",
        description: initialData.description || "",
        trailerUrl: initialData.trailerUrl || "",
        rating: initialData.rating || "",
        genre: initialData.genre || "",
        year: initialData.year || "",
        duration: initialData.duration || ""
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.title.trim()) {
      newErrors.title = "Film nomini kiriting";
    }

    if (!form.description.trim()) {
      newErrors.description = "Tavsif kiriting";
    }

    if (!form.genre.trim()) {
      newErrors.genre = "Janrni kiriting";
    }

    if (!form.rating) {
      newErrors.rating = "Reytingni kiriting";
    }

    if (!form.year) {
      newErrors.year = "Yilni kiriting";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const movieData = {
      title: form.title,
      description: form.description,
      trailerUrl: form.trailerUrl,
      rating: Number(form.rating),
      genre: form.genre,
      year: Number(form.year),
      duration: Number(form.duration)
    };

    onSubmit(movieData);
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <div className="form-group">
        <label>Film nomi</label>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Masalan: Interstellar"
        />

        {errors.title && (
          <small>{errors.title}</small>
        )}
      </div>

      <div className="form-group">
        <label>Tavsif</label>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Film haqida..."
        />

        {errors.description && (
          <small>{errors.description}</small>
        )}
      </div>

      <div className="form-group">
        <label>Rasm URL</label>

        <input
          type="text"
          name="trailerUrl"
          value={form.trailerUrl}
          onChange={handleChange}
          placeholder="https://..."
        />
      </div>

      <div className="form-group">
        <label>Janr</label>

        <input
          type="text"
          name="genre"
          value={form.genre}
          onChange={handleChange}
          placeholder="Erotic"
        />

        {errors.genre && (
          <small>{errors.genre}</small>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Rating</label>

          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            step="0.1"
            value={form.rating}
            onChange={handleChange}
          />

          {errors.rating && (
            <small>{errors.rating}</small>
          )}
        </div>

        <div className="form-group">
          <label>Yil</label>

          <input
            type="number"
            name="year"
            value={form.year}
            onChange={handleChange}
          />

          {errors.year && (
            <small>{errors.year}</small>
          )}
        </div>

        <div className="form-group">
          <label>Davomiyligi</label>

          <input
            type="number"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="120"
          />
        </div>
      </div>

      <button type="submit" className="submit-btn">
        {buttonText}
      </button>
    </form>
  );
}

export default KinoForm;
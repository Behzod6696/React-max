import React from 'react'
import useFetch from '../../Fetch'
import Loading from '../Loading'
import Error from '../Error'
import "./Home.css"
import { Link } from 'react-router-dom'

function Home() {
    const {
        data: kinolar,
        loading,
        error

    } = useFetch("/kinolar")
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error message={error} />
    }
    return (
        <main>
            <section className="hero">
                <div className="container">
                    <h1>MovieHub</h1>

                    <p>
                        Sevimli filmlaringizni toping va kashf qiling.
                    </p>

                    <Link to="/catalog" className="hero-btn">
                        Filmlarni ko'rish
                    </Link>
                </div>
            </section>

            <section className="container section">
                <div className="section-header">
                    <h2>So'nggi filmlar</h2>

                    <Link to="/catalog">
                        Barchasini ko'rish →
                    </Link>
                </div>

                <div className="movie-grid">
                    {kinolar.slice(0, 6).map((kino) => (
                        <MovieCard
                            key={kino.id}
                            movie={kino}
                            onDelete={() => { }}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home
import axios from 'axios';
import { useState, useEffect } from 'react'

export const SuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:4000/superheroes')
            .then(res => {
                setData(res.data)
                setIsLoading(res.isLoading)
            })
            .catch(error => {
                setError(error)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>Transactional Super Heroes Page</h2>

            {data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>
            })}
        </>
    );
    
}
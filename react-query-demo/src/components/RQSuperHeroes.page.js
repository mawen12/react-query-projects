import axios from 'axios';
import { useQuery } from '@tanstack/react-query'

const fetchSuperHeroes = () => axios
        .get('http://localhost:4000/superheroes')
        .then(res => res.data);

export const RQSuperHeroesPage = () => {
    const { isLoading, data, isError, error, isFetching, isSuccess, refetch } = useQuery({
        queryKey: ['super-heroes'],
        queryFn: fetchSuperHeroes,
        enabled: true,
        cacheTime: 5000,
        staleTime: 5000
    });

    console.log({isLoading, isFetching})

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            <button onClick={refetch}>Fetch SuperHeroes</button>
            {
                data.map(hero => {
                    return <div key={hero.name}>{hero.name}</div>
                })
            }
        </>
    );
    
}
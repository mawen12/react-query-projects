import axios from 'axios';
import { useQuery } from '@tanstack/react-query'
import { RQSuperHeroPage } from './RQSuperHero.page';
import { Link } from 'react-router-dom';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';


export const RQSuperHeroesPage = () => {
    const onSuccess = () => {
        console.log('Perform side effect after data fetching')
    }

    const onError = () => {
        console.log('Preform side effect after encountering error')
    }

    const { isLoading, fetchStatus, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);

    console.log({isLoading, isFetching})

    // see https://github.com/TanStack/query/issues/3584
    if ((isLoading && fetchStatus !== 'idle') || isFetching) {
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
                data?.data.map(hero => {
                    return (
                    <div key={hero.id}>
                        <Link to={`/rq-super-heroes/${hero.id}`}>
                            {hero.name}
                        </Link>
                    </div>
                    )
                })
                
            }
        </>
    );
    
}
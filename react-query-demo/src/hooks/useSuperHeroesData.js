import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery({
        queryKey: ['super-heroes'],
        queryFn: fetchSuperHeroes,
        enabled: false,
        onSuccess: onSuccess,
        onError: onError,
    });

}
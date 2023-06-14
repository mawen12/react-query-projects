import { useParams } from "react-router-dom"
import { useSuperHeroData } from "../hooks/useSuperHeroData"

export const RQSuperHeroPage = () => {
    // 参数 heroId 对应 /rq-super-heroes/:heroId
    const {heroId} = useParams()

    const {data, isLoading} = useSuperHeroData(heroId)

    console.log(JSON.stringify(data?.data))
    console.log({heroId})

    return (
        <>
            <h2>Super Hero {heroId}</h2>
            <div>{data?.data.name} - {data?.data.alterEgo}</div>
        </>
    )
}
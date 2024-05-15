import Gallery from '../../components/Gallery'

type Props={
    params:{
        myParams:( string | undefined)[]
    }
}
export function generateMetadata( {params:{ myParams }}:Props){
    const topic = myParams?.[0]?? "curated"
    const page = myParams?.[1]?? "1"
    return {
        title:`results for ${myParams}`
    }
}
export default function SearchResults({params:{myParams}}:Props) {
    console.log("params---->",myParams)
    const topic = myParams?.[0]?? "curated"
    const page = myParams?.[1]?? "1"
    return <Gallery topic={topic} page ={page}/>
}

import {ImageSchemaWithPhotos, ImagesResults} from "@/models/images"

export default async function fetchImages(url: string): Promise<ImagesResults | undefined> {
    try {
        let myHeaders = new Headers()
        myHeaders.append('Authorization', `${process.env.PEXELS_API_KEY}`)
        const res = await fetch(url, {
            headers: myHeaders
        })
        if (!res.ok) {
            throw new Error("Fetch Images error!\n")
        }
        const imagesResults = await res.json()
        console.log(imagesResults)

        const parsedData= ImageSchemaWithPhotos.parse(imagesResults)
        if(parsedData.total_results===0){
            return undefined
        }
        return parsedData
    }
    catch (error) {
        console.error(error)
        throw new Error("Fetch Images error!\n")
    }
}

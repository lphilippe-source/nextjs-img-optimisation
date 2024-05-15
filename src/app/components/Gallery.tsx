import fetchImages from "@/lib/fetchImages"
import type {ImagesResults} from "@/models/images"
import ImgContainer from "@/app/components/ImgContainer";
import addBlurredDataUrls from "@/lib/getBase64";
import getPrevNextPages from "@/lib/getPrevNextPages";
import Footer from "./Footer";

type Props = {
    topic?:string
    page?:string
}
export default async function Gallery({topic,page} :Props) {
//  const url = topic 
//             ?`https://api.pexels.com/v1/search?query=${topic}`
//             :`https://api.pexels.com/v1/curated`

            let url
            if(topic === 'curated' && page){
                url = `https://api.pexels.com/v1/curated?page=${page}`
            }
            else if(topic === 'curated'){
               url = `https://api.pexels.com/v1/curated`
            }
            else if(!page){
               url = `https://api.pexels.com/v1/search?query=${topic}`
            }
            else{
                url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`
            }
            console.log('topic----->',topic)
            console.log('url----->',url)
    const images:ImagesResults | undefined = await fetchImages(url)
    if (!images || images.per_page === 0) {
        return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>
    }
    const imageWithBlur = await addBlurredDataUrls(images)
    const {prevPage,nextPage}= getPrevNextPages(images)

    const footerProps = {topic,page,nextPage,prevPage }
    return (
            // auto-rows define the length of each row 
        <>
            <section className="px-2 my-3 grid grid-cols-gallery auto-rows-[10px]">

                    {imageWithBlur.map((photo) => (
                        <ImgContainer key={photo.id} photo={photo}/>
                    ))}
            </section>
            <Footer {...footerProps}></Footer>
        </>
    )
}


import {Photo} from "@/models/images";
import Image from "next/image";
import Link from "next/link";

type Props = {
    photo: Photo;
}
export default function ImgContainer({photo}: Props) {
    const widthHeightRatio = photo.height / photo.width
    const galleryHeight =  Math.ceil(250 * widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight / 10 ) + 1
    return (
        
        // -------grid and fill responssive value for each images-------

        // relative and overflow-hidden classes are used to make the image responsive, works with fill=true

        // <div className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group">
        //         {/*fill replace required witdh and height*/}
        //         {/*in combinaison with sizes attribute, it will make the image responsive and optimized (Lint Image)*/}
        //         <Image
        //             src={photo.src.large}
        //             alt={photo.alt}
        //             fill={true}
        //             // group style based on parent element
        //             className="object-cover group-hover:opacity-75"
        //             sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
        //             placeholder= "blur" 
        //             blurDataURL={photo.blurredDataUrl}
        //         />
        // </div>
    

        <div className="w-[250px] justify-self-center"
            style={{ gridRow: `span ${photoSpans}`}}
        >
            {/* place-content-center place the grid elements to axis center */}
            <Link href={photo.url} target="_blank" className="grid place-content-center">
                <div className= "rounded-xl overflow-hidden group">
                    <Image
                        width={250}
                        height={galleryHeight}
                        src={photo.src.large}
                        alt={photo.alt}
                        className="object-cover group-hover:opacity-75"
                        sizes="250px"
                        placeholder= "blur" 
                        blurDataURL={photo.blurredDataUrl}
                    />
                </div>
            </Link>

        </div>
    )
}

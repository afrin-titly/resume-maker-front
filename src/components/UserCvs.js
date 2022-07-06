import cv1 from "../images/cv1.jpeg"
import cv2 from "../images/cv2.jpeg"
export default function UserCvs(){
    return(
        <div className="ml-16">
            <img className="object-cover mt-3 mb-12 p-2 pl-3 w-full border-solid border border-black md:h-auto md:w-full" src={cv1} alt=""/>
            <img className="object-cover mt-3 mb-12 p-2 pl-3 w-full border-solid border border-black md:h-auto md:w-dull" src={cv2} alt=""/>
        </div>
    );
}
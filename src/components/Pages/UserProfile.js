import UPProgressBar from "../UPProgressBar";
import UserCvs from "../UserCvs";
import UserSectionHead from "../UserSectionHead";

export default function(){
    return(
        <div className='w-full p-4'>
            <UPProgressBar filled="15%"></UPProgressBar> 
            <div className="flex flex-row leading-normal">
                <div className="w-2/3">
                    <UserSectionHead/>
                </div>
                <div className="w-1/3">
                    <UserCvs/>
                </div>
            </div>
        </div>
    )
}
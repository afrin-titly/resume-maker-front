import Button from "../Button";
import UPProgressBar from "../UPProgressBar";
import UserCvs from "../UserCvs";
import UserSection from "../UserSection";
import UserSectionHead from "../UserSectionHead";

export default function(){
    return(
        <div className='w-full p-4'>
            <div className='w-full pl-16 mb-4 flex flex-row'>
                <UPProgressBar filled="15%" className="pt-2"></UPProgressBar> 
                <Button className="whitespace-nowrap bg-amber-600">Edit</Button>
            </div>
            <div className="flex flex-row leading-normal">
                <div className="w-2/3">
                    <UserSectionHead/>
                    <UserSection title="Education"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </UserSection>
                    <UserSection title="Experience"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </UserSection>
                    <UserSection title="Achievement"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </UserSection>
                    <UserSection title="Interest"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </UserSection>
                    <UserSection title="Language"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </UserSection>
                    <UserSection title="Skill"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </UserSection>
                </div>
                <div className="w-1/3">
                    <UserCvs/>
                </div>
            </div>
        </div>
    )
}
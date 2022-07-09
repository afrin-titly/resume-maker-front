import { Children } from "react";
import Button from "./Button";
import Icon from "./Icon";


export default function UserSection({title,children}){
    return(
        <div className='w-full p-2'>
        <div className="flex flex-col md:flex-col md:w-full p-16 pt-2 pb-1">
            <h4 className="mb-2 mt-3 text-3xl font-bold tracking-tight text-amber-900 dark:text-gray-900">
            <Icon d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                {title}</h4>
            <p className="font-normal text-gray-700 dark:text-gray-500 text-justify">{children}</p>
            <div>
            <Button className="w-16 float-right">Edit</Button>
            </div>
        </div>
        </div>
    )
}
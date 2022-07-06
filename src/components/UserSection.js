import { Children } from "react";
import Button from "./Button";

export default function UserSection({title,children}){
    return(
        <div className='w-full p-2'>
        <div className="flex flex-col md:flex-col md:w-full p-16 pt-2 pb-1">
            <h4 className="mb-2 mt-3 text-3xl font-bold tracking-tight text-amber-900 dark:text-gray-900">{title}</h4>
            <p className="font-normal text-gray-700 dark:text-gray-500 text-justify">{children}</p>
            <div>
            <Button className="w-16 float-right">Edit</Button>
            </div>
        </div>
        </div>
    )
}
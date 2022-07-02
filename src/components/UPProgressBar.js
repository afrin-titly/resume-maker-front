import classes from "../styles/UPProgressBar.module.css"
import Button from "./Button"
import { Link } from "react-router-dom"
export default function UPProgressBar({filled}){
    return(
        <div className={classes.wrapper}>
            <div className={classes.progressBar}>
                <span className={classes.progressBarFill} style={{width: filled}}></span>
            </div>
        </div>
    )
}
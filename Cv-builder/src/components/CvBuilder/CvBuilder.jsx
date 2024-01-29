import "./CvBuilder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import PersonalDataForm from "./PersonalDataForm/PersonalDataForm";


export default function CvBuilder() {
    const [showPersonalData, setShowPersonalData] = useState(false);

    const togglePersonalData = () => {
        console.log('clicked')
        setShowPersonalData(!showPersonalData);
    };

    return(
        <>
            <div className="left-half">
                <div className="user-forms"> 
                    <ul>
                        <li onClick={togglePersonalData}>
                            <a href="#">Personal Data</a>
                            <FontAwesomeIcon icon={ faChevronDown } className="icon-arrow" />
                            {showPersonalData && <PersonalDataForm />}
                        
                         </li>
                        <li><a href="#">Experience</a>  <FontAwesomeIcon icon={ faChevronDown } className="icon-arrow"/>  </li>
                        <li><a href="#">Education</a>   <FontAwesomeIcon icon={ faChevronDown } className="icon-arrow"/>   </li>
                        <li><a href="#">Skills</a>  <FontAwesomeIcon icon={ faChevronDown } className="icon-arrow"/>   </li>
                        <li><a href="#">Languages</a>   <FontAwesomeIcon icon={ faChevronDown } className="icon-arrow"/>   </li>
                    </ul>
                </div>
            </div>
            <div className="right-half">
            </div>
        </>
    );
}
import "../styles/Flash.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons'
export const Flash=()=>{
     return<>
        <div className="flash">
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#00b500",backgroundColor: "white",fontSize: "5rem"}} />
         <p id='success'>Success!</p>
         <p>Message Sent Successfully</p>
        </div>
        </>
}
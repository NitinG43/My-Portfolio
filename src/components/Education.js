import "../styles/Education.css"
import {forwardRef} from 'react'
export const Education=forwardRef((props,ref)=>{
    return <>
    <div className="education" ref={ref}>
        <h1>Education</h1>
        <p id="desc">Throughout my academic journey, I've emphasized active learning and exploration. Here's a breakdown of my educational background.</p>
        <div className="ed-section">
            <div className="study">
             <img src="https://upload.wikimedia.org/wikipedia/en/6/61/Rajiv_Gandhi_Technical_University_logo.jpg" alt="RGPV Logo" />
             <div className="info">
                <p className="school-name">University Institute of Technology RGPV Bhopal</p>
                <p className="study-info">B.Tech (Computer Science)</p>
                <p className="date">2021 - 2025</p>
             </div>
            </div>
            <div className="description">
            <p> GPA: 8.46</p>
            <p>I have recently completed my Bachelor of Technology in Computer Science and Engineering from University Institute of Technology, RGPV, Bhopal.</p>
            </div>
        </div>


        <div className="ed-section">
            <div className="study">
             <img src="https://www.mpbse.nic.in/resources/images/MPBoardLogo.png"/>
             <div className="info">
                <p className="school-name">Government Higher secondary School Bairad (Shivpuri M.P.)</p>
                <p className="study-info">Class 12th (PCM) (MPBSE)</p>
                <p className="date">2019 - 2020</p>
             </div>
            </div>
            <div className="description">
            <p>Percentage: 88.4%</p>
               <p>Completed 12th with Mathematics and Science from Government Higher Secondary School, Bairad, Shivpuri, M.P.</p>
            </div>
        </div>


        <div className="ed-section">
            <div className="study">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoQgkCAkGmVgQk64DV3syEURxemUke1U-yKvbElFS4Q&s" alt="LOGO" />
             <div className="info">
                <p className="school-name">Rising Public High School Bairad (Shivpuri M.P.)</p>
                <p className="study-info">Class 10th (MPBSE)</p>
                <p className="date">2017 - 2018</p>
             </div>
            </div>
            <div className="description">
            <p> Percentage: 91.4%</p>
               <p>Completed 10th from Rising Public High School, Bairad, Shivpuri, M.P.</p>
            </div>
        </div>


    </div>
    </>
}
)
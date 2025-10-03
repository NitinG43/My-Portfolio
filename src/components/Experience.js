import "../styles/Experience.css"
import { forwardRef } from "react"
export const Experience=forwardRef((props,ref)=>{
    return <>
    <div className="experiences" ref={ref}>
        <h1>Experience</h1>
        <p id="desc">As a software engineer, I've refined my skills by solving problems across various platforms and gaining valuable experience in Web Development.</p>

        <div className="ex-section">
            <div className="company">
             <img src="https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2019/05/10175228/images-11.png" alt="LeetCode LOGO" />
             <div className="info">
                <p className="experience">900+ Problems Solved | Rank Under Top 12%</p>
                <p className="company-name">LeetCode</p>
                <p className="date">2023 - present</p>
             </div>
            </div>
            <div className="description">
               <p>By consistently engaging in coding challenges, I've mastered over 900 LeetCode problems, maintaining an impressive streak of daily practice for 8 months. Participating in over 20 contests, I've ranked among the top 12% of coders, refining my logic and problem-solving skills along the way. This consistent effort has significantly enhanced my ability to tackle complex problems and find efficient solutions.</p>
               <p>skills: C++, SQL</p>
            </div>
        </div>
    </div>
    </>
}
);
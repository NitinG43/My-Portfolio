import "../styles/Project.css"
import { forwardRef } from "react";
export const Project=forwardRef((props,ref)=>{
    return <>
     <div className="projects" ref={ref}>
        <h1>Projects</h1>
        <p>Completed multiple projects, enhancing my development skills significantly.</p>
        <div className="project-container">



              <div className="project-card">
                <img src="https://pmstudycircle.com/wp-content/uploads/2024/01/portfolio.png.webp" alt="" />

                <div className="technologies">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>React.js</p>
                </div>
                <p id="title">Portfolio Website - Front-end Development</p>
                <p id="date">Sep. 2025 - Oct. 2025</p>
                <p id="description">Developed a responsive Portfolio Website using React.js, incorporating React hooks and fundamental frontend development principles.</p>
                <div className="links">
                    <a href="https://github.com/NitinG43" target="_blank" id="code">View Code</a>
                    <a href="#" target="_blank" id="live">View Live</a>
                </div>
            </div>


        

        <div className="project-card">
                <img src="https://th.bing.com/th/id/R.1a6ef800e4679e1f4d5f3db2ab031b38?rik=6SIAsEDzSjIvng&riu=http%3a%2f%2flocaladvertisingjournal.com%2fwp-content%2fuploads%2f2019%2f05%2fOpen-an-online-store-The-top-10-free-eCommerce-platforms.jpg&ehk=Wk7NeVvJo9kKLUiLUWStVMXXDKi9rDH4LXWsW3%2bngYY%3d&risl=&pid=ImgRaw&r=0" alt="" />

                <div className="technologies">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Tailwind</p>
                    <p>Java Script</p>
                    <p>React.js</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>PostgreSQL</p>
                </div>
                <p id="title">POSTGRE STORE- PERN Stack development </p>
                <p id="date">April 2025 - May 2025</p>
                <p id="description">Developed a fully functional online store implementing complete CRUD operations for seamless product management. </p>
                <div className="links">
                    <a href="https://github.com/NitinG43/POSGRESTORE-STORE" target="_blank" id="code">View Code</a>
                    <a href="https://posgrestore-store.onrender.com/" target="_blank" id="live">View Live</a>
                </div>
            </div>

           <div className="project-card">
                <img src="https://technicalustad.com/wp-content/uploads/2022/02/Best-Book-Review-Sites-9.webp" alt="" />

                <div className="technologies">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Bootstrap</p>
                    <p>Java Script</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>PostgreSQL</p>
                </div>
                <p id="title">Readers Paradise - Full Stack Development</p>
                <p id="date">Aug 2024 - Oct 2024</p>
                <p id="description">Developed a Book Review Website with advanced search and filtering features for easy navigation and content discovery.</p>
                <div className="links">
                    <a href="https://github.com/NitinG43/Reader-s-Paradise" target="_blank" id="code">View Code</a>
                    <a href="https://reader-s-paradise2.onrender.com/" target="_blank" id="live">View Live</a>
                </div>
            </div>


            <div className="project-card">
                <img src="https://bobcat.grahamdigital.com/image/upload/view?width=954&height=537&method=crop&url=https://sharedmedia.grahamdigital.com/photo/2016/04/06/Quiz_4840050_21609720_ver1.0.jpg" alt="" />

                <div className="technologies">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JS</p>

                </div>
                <p id="title">PlayQuiz- Simple Quiz Website</p>
                <p id="date">Aug 2024</p>
                <p id="description">Designed and implemented a quiz website that enables users to test their knowledge with real-time scoring and results. </p>
                <div className="links">
                    <a href="https://github.com/NitinG43/PlayQuiz" target="_blank" id="code">View Code</a>
                    <a href="https://niting43.github.io/PlayQuiz/" target="_blank" id="live">View Live</a>
                </div>
            </div>



          



            <div className="project-card">
                <img src="https://www.iqutest.com/wp-content/uploads/2023/07/Simon-Game.jpg" alt="" />

                <div className="technologies">
                    <p>HTM</p>
                    <p>CSS</p>
                    <p>Java Script</p>
                </div>
                <p id="title">Simon Game - mini project</p>
                <p id="date">July 2024 - Aug 2024</p>
                <p id="description">Simon game clone using HTML, CSS, and JavaScript. Players must click on a series of coloured buttons in the correct order to progress</p>
                <div className="links">
                    <a href="https://github.com/NitinG43/The-Simon-Game" target="_blank" id="code">View Code</a>
                    <a href="https://niting43.github.io/The-Simon-Game/" target="_blank" id="live">View Live</a>
                </div>
            </div>



            <div className="project-card">
                <img src="https://punandjokes.com/wp-content/uploads/2023/11/the-jokes-1.png" alt="" />

                <div className="technologies">
                    <p>HTM</p>
                    <p>CSS</p>
                    <p>JS</p>
                    <p>EJS</p>
                    <p>NodeJS</p>
                    <p>ExpressJS</p>
                </div>
                <p id="title">Joke4u</p>
                <p id="date">Aug 2024 - Sep 2024</p>
                <p id="description">Developed a dynamic website that fetches jokes via API and categorizes them with filter functionality.</p>
                <div className="links">
                    <a href="https://github.com/NitinG43/joke-4-you" target="_blank" id="code">View Code</a>
                    <a href="https://joke-4-you.onrender.com/" target="_blank" id="live">View Live</a>
                </div>
            </div>



        </div>
     </div>

    </>
}
);
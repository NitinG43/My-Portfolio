import "../styles/Home.css";
import { forwardRef } from "react";

export const Home = forwardRef((props, ref) => {
  return (
    <>
      <div className="home" ref={ref}>
        <div className="about">
          <h1>Hi, I am</h1>
          <h1 className="name">Nitin Garg</h1>
          <h1>I am a PERN Developer | Programmer</h1>
          <p>
            As an individual, I'm constantly fueled by motivation and thrive on
            new challenges. My passion lies in learning and problem-solving, and
            I approach tasks with unwavering enthusiasm. I have a knack for
            finding efficient solutions and am always pushing myself to excel.
            You can explore my journey through my portfolio, where each project
            and experience unfolds a new chapter of growth and achievement.
          </p>
          <a href={process.env.PARCEL_RESUME_URL} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
        <div className="image">
          <img src="https://raw.githubusercontent.com/NitinG43/My-Portfolio/main/src/assets/Profile_image-modified.png" alt="Image" />
        </div>
      </div>
    </>
  );
});

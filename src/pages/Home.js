import React from "react";
import classes from "./Home.module.css";
import './footer.css';
import Bot from '../images/mylogo1.png';

function Home() {
  return (
    <div className={classes.main}>
      <div className={classes.tux}>
        <h1 className={classes.h1}>Hi, I am Afraz</h1>
        <h2 className={classes.h2}>
          A high-school student and a front-end web developer          <br /><br />
          <hr className={classes.hr} align='center' />
        </h2>
        <div
          id="outer"
          style={{
            paddingTop: 40,
          }}
        >
          <div className={classes.button_slide}> Learn more </div>
        </div>
        <div className={classes.circle}>
          {/* <img src={Bot} alt="bot" className={classes.img} /> */}
        </div>
      </div>
      <div className={classes.about}>
        <h1 className={classes.h1_2}>
          Born - 2005 <br /> Country - Bangladesh <br /> City - Dhaka <br /> Age
          - 15+
        </h1>
      </div>
      <div className={classes.about2}>
        <h1 className={classes.h1_3}>About Me</h1>
        <h4 className={classes.about_content}>
          It's been a while since I started to learn programming. I have ideas
          on softwares and hardwares and can create simple GUI applications and
          a bit advanced console applications. I have learnt programming
          languages such as Java, C++, python, dart and C# and app frameworks
          like Xamarin and Flutter. I am more advanced in Web development
          (Frontend) and a bit at the backend. Recently learned Sass, JavaScript, React.Js,
          Bootstrap 5. Trying my best to achieve my goal as a software
          engineer.
          <br />
          <br />
          <hr className={classes.hr} align='center' />
        </h4>
      </div>
    </div>
  );
}
export default Home;

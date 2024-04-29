import React from "react";
import Links from "./Links"; // Import the Links component

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* Pass down the GitHub and LinkedIn links to the Links component */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;


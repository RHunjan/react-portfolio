import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
   <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <p>I am a writer, analyst, financial literacy advocate and curious explorer…</p>
      <p>Currently I am on a coding adventure!</p>
       <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="cover" />
    </section>
  );
}

export default About;
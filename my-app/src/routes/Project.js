
import React from 'react';

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Heroimg2 from '../component/Heroimg2';
import WorkCard from '../component/WorkCard';
import projectImage1 from '../assets/project1.jpg'; 
import projectImage2 from '../assets/project2.jpg';
import projectImage3 from '../assets/project3.jpg';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works" />
      
      <div className="project-section">
        <WorkCard 
          title="Project 1" 
          image={projectImage1} 
          description="Description of Project 1" 
          viewLink="https://example.com/project1" 
          sourceLink="https://github.com/VishalMaddheshiya2304/project1"
        />

        <WorkCard 
          title="Project 2" 
          image={projectImage2} 
          description="Description of Project 2" 
          viewLink="https://example.com/project2" 
          sourceLink="https://github.com/VishalMaddheshiya2304/project2"
        />

        <WorkCard 
          title="Project 3" 
          image={projectImage3} 
          description="Description of Project 3" 
          viewLink="https://example.com/project3" 
          sourceLink="https://github.com/VishalMaddheshiya2304/project3"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Project;

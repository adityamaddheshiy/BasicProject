import React from 'react'
import Card from './components/card'

export default function App() {

  const persons = [
    {
      name: "Wade Wilson",
      photo: "https://i.pinimg.com/736x/f1/2f/37/f12f37a580349c171e0cb7ff6f3e8331.jpg",
      position: "UI / UX Designer",
      typeOfWork: "Full Time",
      skills: ["UI", "UX", "Figma", "Wireframing"],
      experience: "5 years",
      description: "Cheerful and optimistic",
      rate:"45"
    },
    {
      name: "Tony Stark",
      photo: "https://i.pinimg.com/736x/e9/c5/1a/e9c51a0a6819c3b0032b44c46fd199b0.jpg",
      position: "Full Stack Developer",
      typeOfWork: "Remote",
      skills: ["React", "Node.js", "System Design", "API"],
      experience: "10 years",
      description: "Looks exhausted after work",
      rate:"85"

    },
    {
      name: "Peter Parker",
      photo: "https://i.pinimg.com/736x/21/22/87/21228762dadab7976d14951ebbd9a93a.jpg",
      position: "Frontend Developer",
      typeOfWork: "Part Time",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      experience: "2 years",
      description: "Eager and energetic",
      rate:"65"

    },
    {
      name: "Natasha Romanoff",
      photo: "https://i.pinimg.com/736x/9a/dc/ea/9adcea1cb44ecb38ac0638b4eed668f9.jpg",
      position: "Product Designer",
      typeOfWork: "Contract",
      skills: ["UX Research", "UI", "Prototyping"],
      experience: "7 years",
      description: "Clearly frustrated",
      rate:"69"
    },
    {
      name: "Bruce Banner",
      photo: "https://i.pinimg.com/736x/fc/86/7d/fc867df822d70b9d78171c7e790f99c7.jpg",
      position: "Backend Engineer",
      typeOfWork: "Full Time",
      skills: ["Node.js", "Databases", "Security", "APIs"],
      experience: "8 years",
      description: "Unsure about the situation",
      rate:"89"
    },
    {
      name: "Steve Rogers",
      photo: "https://i.pinimg.com/736x/2c/e3/98/2ce398b6e5a2999258f2327bbbb72a73.jpg",
      position: "Project Manager",
      typeOfWork: "Hybrid",
      skills: ["Agile", "Scrum", "Leadership"],
      experience: "6 years",
      description: "Easygoing and chill",
      rate:"36"



    },
    {
      name: "Stephen Strange",
      photo: "https://i.pinimg.com/736x/e7/56/07/e75607b19db000028d074ca47ca7fe24.jpg",
      position: "Mobile App Developer",
      typeOfWork: "Remote",
      skills: ["Flutter", "Firebase", "UI"],
      experience: "4 years",
      description: "Deep in concentration",
      rate:"70"
    },
    {
      name: "Clint Barton",
      photo: "https://i.pinimg.com/736x/b4/5c/13/b45c133201eff18f79b8ebf034dcf005.jpg",
      position: "QA Engineer",
      typeOfWork: "Full Time",
      skills: ["Testing", "Automation", "Selenium"],
      experience: "3 years",
      description: "Full of humor",
      rate:"48"
    },
    {
      name: "Loki Laufeyson",
      photo: "https://i.pinimg.com/736x/05/cb/d4/05cbd46faef6202dbc5299d007fc9ca6.jpg",
      position: "DevOps Engineer",
      typeOfWork: "Contract",
      skills: ["AWS", "Docker", "CI/CD"],
      experience: "9 years",
      description: "Unsure about the situation",
      rate:"96"

    },
    {
      name: "Diana Prince",
      photo: "https://i.pinimg.com/736x/2c/15/22/2c15222f332f689b4cf89dd886af7d1d.jpg",
      position: "Software Engineer",
      typeOfWork: "Full Time",
      skills: ["JavaScript", "React", "Algorithms"],
      experience: "5 years",
      description: "Feeling down",
      rate:"100"
    }

  ];

  console.log(persons);

  return (
    <div className="Parent">
      {persons.map(function (elem) {
        return <Card name={elem.name} photo={elem.photo} skills={elem.skills} type={elem.typeOfWork} pos={elem.position} des={elem.description} rate={elem.rate}/>
        return <Card name={elem.name} photo={elem.photo} skills={elem.skills} type={elem.typeOfWork} pos={elem.position} des={elem.description} rate={elem.rate}/>
      })}
    </div>
  )
}

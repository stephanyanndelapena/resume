import React from "react";
import "./App.css";

function Header({ imageSrc, name }) {
  return (
    <div className="header">
      <img src={imageSrc} alt={name} className="header_profile-pic" />
      <h1 className="header_name">{name}</h1>
    </div>
  );
}

function Contact({ address, phone, email, website }) {
  return (
    <div className="contact">
      <h3 className="contact_title">Contact</h3>
      <p><strong>Address</strong><br />{address}</p>
      <p><strong>Phone</strong><br />{phone}</p>
      <p><strong>E-mail</strong><br />{email}</p>
      <p><strong>WWW</strong><br /><u>{website}</u></p>
    </div>
  );
}

function Skills({ skills }) {
  return (
    <div className="skills">
      <h3 className="skills_title">Skills</h3>
      <ul className="skills_list">
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Profile({ text }) {
  return (
    <section className="profile">
      <p>{text}</p>
    </section>
  );
}

function Edu({ role, school }) {
  return (
    <div className="edu_entry">
    <div className="edu-date"></div> { } 
      <div className="edu_info">
        <h3 className="edu_role">{role}</h3>
        <p className="edu_school">{school}</p>
      </div>
    </div>
  );
}

function Education({ educationList }) {
  return (
    <section className="education section">
      <h2 className="section_title">Education</h2>
      {educationList.map((edu, idx) => (
        <Edu key={idx} role={edu.role} school={edu.school} />
      ))}
    </section>
  );
}

function JobEntry({ date, role, org, description }) {
  return (
    <div className="job_entry">
      <div className="exp_date">{date}</div>
      <div className="exp_info">
        <h3 className="exp_role">{role}</h3>
        <p className="exp_org">{org}</p>
        <ul className="exp_desc">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience({ experiences }) {
  return (
    <section className="experience section">
      <h2 className="section_title">Experience</h2>
      {experiences.map((exp, idx) => (
        <JobEntry
          key={idx}
          date={exp.date}
          role={exp.role}
          org={exp.org}
          description={exp.description}
        />
      ))}
    </section>
  );
}

function Container() {
  return (
    <div className="container">
      <aside className="left-column">
        <Header
          imageSrc="/images/profile.png"
          name="Stephany Ann Dela Peña"
        />
        <Contact
          address="Candaba, Province of Pampanga, PAM 2013"
          phone="+63 915 620 9811"
          email="sasdelapena.student@ua.edu.ph"
          website="Bold Profile"
        />
        <Skills
          skills={[
            "Basic knowledge of HTML and CSS for creating simple, functional web pages and learning about responsive layouts.",
            "Experience using Figma for UI/UX design, wireframing, and prototyping, creating polished and interactive design mockups.",
            "Hands-on practice building websites in class projects, learning how to combine design and coding to make working pages.",
            "Background in Computer Networks 1 and practical experience in building small company networks using Cisco NetAcad projects.",
            "Reliable and cooperative group member, always ready to contribute, meet deadlines, and support other members of the team during projects."
          ]}
        />
      </aside>

      <main className="right-column">
        <Profile
          text="I am a third-year Information Technology student who is becoming more interested in building and designing websites. I possess basic skills in HTML, CSS, Figma, and database management, which I have developed by creating simple websites for my past projects. As an active member of the Student Society of Information Technology Education (SSITE), I have enhanced my teamwork, organizational, and communication skills through participation in various student activities."
        />
        <Education
          educationList={[
            { role: "Bachelor of Science in Information Technology", school: "University of the Assumption – Del Pilar Campus, Unisite Subdivision, San Fernando City, Pampanga" },
            { role: "Senior High School (GAS)", school: "St. Andrews Archdiocesan School of Candaba, Inc., Candaba, Pampanga" },
            { role: "Junior High School", school: "St. Andrews Archdiocesan School of Candaba, Inc., Candaba, Pampanga" },
            { role: "Elementary Education", school: "Candaba Elementary School, Candaba, Pampanga" }
          ]}
        />
        <Experience
          experiences={[
            {
              date: "2025 – Current",
              role: "Front-End Developer",
              org: "Google",
              description: [
                "Developed responsive web applications using React, JavaScript, and CSS.",
                "Collaborated with UX designers to transform wireframes and prototypes into functional interfaces."
              ]
            },
            {
              date: "2025 – Current",
              role: "3rd Year Sports Coordinator",
              org: "Student Society of Information Technology Education (SSITE) - University of the Assumption",
              description: [
                "Assisted in organizing the General Assembly, IT activities during prelims, and other upcoming IT-related events.",
                "Helped plan and facilitate student activities that promote engagement, collaboration, and participation within the IT department community.",
                "Gained leadership, teamwork, and communication skills through active participation."
              ]
            },
            {
              date: "2025",
              role: "Web Development Projects (Academic)",
              org: "Integrative Programming Course",
              description: [
                "Designed and developed websites for school projects, focusing on functionality, user experience, and responsive design.",
                "Collaborated in teams to implement front-end and back-end features.",
                "Created web pages with different concepts and CSS styles to explore and apply various design approaches."
              ]
            }
          ]}
        />
      </main>
    </div>
  );
}

function App() {
  return <Container />;
}

export default App;

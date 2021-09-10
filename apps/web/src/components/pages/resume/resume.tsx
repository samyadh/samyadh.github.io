import React, { useState } from 'react';

export function Resume() {
  const roleDetails = [
    {
      title: 'Frontend Developer',
      skills: [
        'JavaScript',
        'Angular',
        'React',
        'NodeJS',
        'SCSS',
        'HTML',
        'PHP',
        'Python',
      ],
    },
    {
      title: 'Team Lead',
      skills: [
        'JavaScript',
        'Angular',
        'React',
        'NodeJS',
        'PHP',
        'Python',
        'CI/CD',
        'Agile',
        'Scrum',
      ],
    },
    {
      title: 'Full-Stack Developer',
      skills: [
        'JavaScript',
        'Angular',
        'React',
        'NodeJS',
        'Python',
        'Django',
        'PHP',
        'CI/CD',
        'REST',
        'SQL',
        'No SQL',
        'UI/UX Design',
      ],
    },
    {
      title: 'Project Manager',
      skills: [
        'Agile',
        'Scrum',
        'Lean',
        'PMI ACP',
        'Resource Management',
        'Risk Management',
        'Delivery Management',
      ],
    },
    {
      title: 'Tech Consultant',
      skills: [
        'JavaScript',
        'Angular',
        'React',
        'UI/UX Design',
        'Node',
        'PHP',
        'Python',
        'Agile',
        'Project Management',
        'Product Management',
        'DevOps',
      ],
    },
  ];

  const projectsDetails = {
    sum: 'Summary',
    det: 'Detailed',
    none: 'None',
  };

  const [skills, setSkills] = useState(roleDetails[0].skills);
  const [role, setRole] = useState(roleDetails[0]);
  const [projectDetails, setProjectDetails] = useState('Summary');

  function addSkill(e: React.FocusEvent<HTMLInputElement>) {
    setSkills((skills) => [...skills, e.target.value]);
  }

  function getExperience() {
    const startDate = '2014-01-01';
    const diff = Math.floor(
      new Date().getTime() - new Date(startDate).getTime()
    );
    const day = 1000 * 60 * 60 * 24;
    const days = Math.floor(diff / day);
    const months = Math.floor(days / 31);
    const years = Math.floor(months / 12);
    return years + '.' + months / 10 + ' years';
  }

  return (
    <div>
      <div className="print:hidden w-[1180px] m-auto text-xs p-4">
        <h1 className="text-xs font-semibold">Export Settings</h1>
        <div className="flex">
          <div className="py-1">
            <h3 className="text-xs font-semibold">Role</h3>
            <select
              className="text-xs border border-black cursor-pointer"
              onChange={(e) => {
                const role = roleDetails.find(
                  (role) => role.title === e.target.value
                );
                if (role) {
                  setRole(role);
                  setSkills(role.skills);
                }
              }}
            >
              {roleDetails.map((role, index) => {
                return (
                  <option key={index} className="text-xs" value={role.title}>
                    {role.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="py-1 ml-2">
            <h3 className="text-xs font-semibold">Projects</h3>
            <select
              className="text-xs border border-black cursor-pointer"
              onChange={(e) => {
                setProjectDetails(e.target.value);
              }}
            >
              {Object.values(projectsDetails).map((role, key) => {
                return (
                  <option key={key} className="text-xs">
                    {role}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="py-1 ml-2">
            <h3 className="text-xs font-semibold">Skills</h3>
            <input
              type="text"
              className="text-xs border border-black cursor-pointer px-2 w-60"
              onBlur={addSkill}
            />
          </div>
          <div className="ml-2">
            <button
              type="button"
              onClick={() => {
                window.print();
              }}
              className="text-xs font-semibold uppercase py-0 px-1 border border-black mt-5"
            >
              Export
            </button>
          </div>
        </div>
      </div>
      <div className="w-[1180px] h-[1668px] m-auto box-border border-2 p-12 flex flex-col">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black">Samyadh Jain</h1>
            <h4>samyadh.jain@gmail.com</h4>
            <h4>+91 9739221385</h4>
          </div>
          <div className="w-2/5 text-right">
            <ul>
              {skills.map((skill, key) => {
                return (
                  <li
                    key={key}
                    className="inline-block text-sm mx-1 border-b-2 border-black"
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="border-2 border-black mb-2 mt-4 rounded"></div>
        <div className="flex">
          {role.title === roleDetails[0].title && (
            <h3>
              <strong>{getExperience()}</strong> experience in building
              pixel-perfect, beautiful and robust interface for products which
              is used by millions of people around the world every day.
            </h3>
          )}
          {role.title === roleDetails[1].title && (
            <h3>
              In <strong>{getExperience()}</strong> of my experience I have
              managed teams sizing from 2 to 15 consisting diverse and
              multilingual team-members. I always strive to lead as an example
              which has helped me to build and nurture teams to perform
              efficiently.
            </h3>
          )}
          {role.title === roleDetails[2].title && (
            <h3>
              <strong>{getExperience()}</strong> experience in stitching kickass
              functionalities together and create world class products. I love
              logics and structure of coding, always look to write elegant and
              efficient code no matter which programming language it is.
            </h3>
          )}
          {role.title === roleDetails[3].title && (
            <h3>
              Technical Project Manager focused on working with mutli-functional
              teams and increase customer satisfaction through process. Proven
              experience is shipping world class products for lastx
              <strong> {getExperience()}</strong>.
            </h3>
          )}
          {role.title === roleDetails[4].title && (
            <h3>
              People who know me say I am "Jack of all trades". However, I feel
              I know only enough to find, analyze and comprehend things that I
              do not know. I enjoy taking complex problems and find simple but
              beautiful solutions for them. With
              <strong> {getExperience()}</strong> experience I always find my
              self guiding tech products to perform to their best.
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resume;

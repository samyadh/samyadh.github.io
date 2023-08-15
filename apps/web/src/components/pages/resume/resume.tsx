import React, { useState } from 'react';
import {
  workExperience,
  roleDetails,
  IProject,
  eductation,
  achivements,
  availablity,
} from '../../../models/role-details';

export function Resume() {
  const [skills, setSkills] = useState(roleDetails[0].skills);
  const [role, setRole] = useState(roleDetails[0]);

  function addSkill(e: React.FocusEvent<HTMLInputElement>) {
    setSkills((skills) => [...skills, e.target.value]);
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
            <h3 className="text-xs font-semibold">Skills</h3>
            <input
              type="text"
              className="px-2 text-xs border border-black cursor-pointer w-60"
              onBlur={addSkill}
            />
          </div>
          <div className="ml-2">
            <button
              type="button"
              onClick={() => {
                window.print();
              }}
              className="px-1 py-0 mt-5 text-xs font-semibold uppercase border border-black"
            >
              Export
            </button>
          </div>
        </div>
      </div>
      <div className="w-[1180px] h-[1668px] m-auto box-border border-2 p-12 flex flex-col relative overflow-hidden">
        {/* <div className="absolute z-10 -rotate-3 top-0 left-1/2 w-[1800px]">
          <ul>
            {skills.map((skill, key) => {
              return (
                <li key={key} className="font-black text-gray-100 text-9xl">
                  {skill}
                </li>
              );
            })}
          </ul>
        </div> */}
        <div className="z-10">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="inline-block text-3xl font-black">Samyadh Jain</h1>
              <h1 className="mr-1 text-sm font-bold">
                {roleDetails[role.index].tagLine}
              </h1>
              <ul className="mb-1">
                {skills.map((skill, key) => {
                  return (
                    <li
                      key={key}
                      className="inline-block mr-1 mt-1 text-xs px-2 py-[2px] bg-gray-800 text-white rounded"
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
              <a
                className="inline-block px-2 py-1 mr-1 text-xs font-bold bg-gray-200 rounded"
                href="tel:+15197311983"
                target="_blank"
                rel="noreferrer"
              >
                +1 (519) 731 1983
              </a>
              <a
                className="inline-block px-2 py-1 mr-1 text-xs font-bold bg-gray-200 rounded"
                href="https://www.google.com/maps/place/7+Foot+Crescent,+Cambridge,+ON+N1R+8M5/@43.3888871,-80.3103819,17z/data=!3m1!4b1!4m5!3m4!1s0x882b882532470b69:0x232f15d014c3571a!8m2!3d43.3888832!4d-80.3081879"
                target="_blank"
                rel="noreferrer"
              >
                7 Foot Crescent, Cambridge, ON N1R 8M5
              </a>
              <a
                className="inline-block px-2 py-1 mr-1 text-xs font-bold bg-gray-200 rounded"
                href="mailTo:samyadh.jain@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                samyadh.jain@gmail.com
              </a>
              <a
                className="inline-block px-2 py-1 mr-1 text-xs font-bold bg-gray-200 rounded"
                href="https://samyadh.github.io"
                target="_blank"
                rel="noreferrer"
              >
                https://samyadh.github.io
              </a>
            </div>
          </div>
          <div className="h-[2px] bg-black mb-2 mt-4"></div>
          <div className="intro">
            <h3>{roleDetails[role.index].intro}</h3>
          </div>
          <div>
            <h4 className="inline-block mt-1 font-bold border-b-2 border-black">
              Work Experience
            </h4>
            <ul className="pl-4 ml-2 border-l-2 border-black">
              {workExperience.map((work, index) => {
                return work.hidden === undefined ||
                  !work.hidden?.includes(role.index) ? (
                  <li
                    key={index}
                    className="relative pt-2 before:border-t-2 before:border-black before:content-center before:absolute before:left-[-28px] before:top-[22px] before:w-[14px]"
                  >
                    {/* {work.roles ? (
                      work.roles.map((mrole, mIndex) => (
                        <h3 className="text-sm font-bold">
                          {mrole.title + ' '}
                          {!roleDetails[role.index].freelance && (
                            <span className="text-sm italic font-normal">
                              {mIndex === 0
                                ? `at ${mrole.company}, ${mrole.period}`
                                : `from ${mrole.period}`}
                            </span>
                          )}
                        </h3>
                      ))
                    ) : ( */}
                    <h3 className="text-sm font-bold">
                      {work.title + ' '}
                      {!roleDetails[role.index].freelance && (
                        <span className="text-sm italic font-normal">
                          at {work.company}, {work.period}
                        </span>
                      )}
                    </h3>
                    {/* )} */}
                    <div>
                      {work.projectDetails && (
                        <ul className="mb-1">
                          {work.projectDetails?.map(
                            (project: IProject, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="relative before:border-t-2 before:rounded before:border-black before:content-center before:absolute before:left-[-6px] before:top-[6px] before:w-[10px] before:h-[10px] before:bg-black border-l-2 border-black pl-4 ml-2"
                                >
                                  <h3 className="text-sm font-bold">
                                    {project.title},{' '}
                                    <span className="text-sm italic font-normal">
                                      {project.techUsed}
                                    </span>
                                  </h3>
                                  <p className="text-sm italic">
                                    {project.description},{' '}
                                    {project.contributions}
                                  </p>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      )}
                      <h4 className="text-sm font-bold">{work.projects}</h4>
                    </div>
                    <div>
                      <ul className="pl-4 mt-1">
                        {work.contributions.map((task, index) => {
                          return (
                            <li className="text-sm list-disc" key={index}>
                              {task}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                ) : (
                  ''
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="pb-1 mt-2 font-bold border-b-2 border-black">
              Education
            </h4>
            <ul className="flex">
              {eductation.map((course, index) => {
                return (
                  <li
                    key={index}
                    className="relative inline-block w-3/4 pt-2 before:bg-black before:content-center before:absolute before:left-[12px] before:top-[-8px] before:h-[14px] before:w-[2px]"
                  >
                    <h3 className="text-sm font-bold">
                      {course.title}
                      <p className="text-sm italic font-normal">
                        {course.university}, {course.period}, Aggregate{' '}
                        {course.percentage}
                      </p>
                    </h3>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* {[0, 1, 2].includes(role.index) && (
            <div>
              <h4 className="inline-block mt-2 font-bold border-b-2 border-black">
                Achivements
              </h4>
              <ul className="pl-4 ml-2 border-l-2 border-black">
                {achivements.map((goal, index) => {
                  return (
                    <li
                      key={index}
                      className="relative pt-1 before:border-t-2 before:border-black before:content-center before:absolute before:left-[-28px] before:top-[16px] before:w-[14px]"
                    >
                      <h4 className="text-sm">{goal}</h4>
                    </li>
                  );
                })}
              </ul>
            </div>
          )} */}
          {[999].includes(role.index) && (
            <div>
              <h4 className="inline-block mt-2 font-bold border-b-2 border-black">
                Availablity
              </h4>
              <ul className="pl-4 ml-2 border-l-2 border-black">
                {availablity.map((goal, index) => {
                  return (
                    <li
                      key={index}
                      className="relative pt-1 before:border-t-2 before:border-black before:content-center before:absolute before:left-[-28px] before:top-[16px] before:w-[14px]"
                    >
                      <h4 className="text-sm">{goal}</h4>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resume;

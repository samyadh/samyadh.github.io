import React, { useState } from 'react';
import {
  workExperience,
  roleDetails,
  IProject,
  eductation,
  achivements,
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
      <div className="w-[1180px] h-[1668px] m-auto box-border border-2 p-12 flex flex-col relative overflow-hidden">
        <div className="absolute z-10 -rotate-3 top-0 left-1/2 w-[1800px]">
          <ul>
            {skills.map((skill, key) => {
              return (
                <li key={key} className="text-9xl font-black text-gray-100">
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="z-10">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-black inline-block">Samyadh Jain</h1>
              <h1 className="text-sm font-bold mr-1">
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
                className="text-xs bg-gray-200 mr-1 inline-block px-2 py-1 rounded"
                href="tel:+919739221385"
                target="_blank"
                rel="noreferrer"
              >
                +91 9739221385
              </a>
              <a
                className="text-xs bg-gray-200 mr-1 inline-block px-2 py-1 rounded"
                href="mailTo:samyadh.jain@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                samyadh.jain@gmail.com
              </a>
              <a
                className="text-xs bg-gray-200 mr-1 inline-block px-2 py-1 rounded"
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
            <h4 className="font-bold mt-1 border-b-2 border-black inline-block">
              Work Experience
            </h4>
            <ul className="border-l-2 border-black pl-4 ml-2">
              {workExperience.map((work, index) => {
                if (
                  work.hidden === undefined ||
                  !work.hidden?.includes(role.index)
                )
                  return (
                    <li
                      key={index}
                      className="relative pt-2 before:border-t-2 before:border-black before:content-center before:absolute before:left-[-28px] before:top-[22px] before:w-[14px]"
                    >
                      <h3 className="font-bold text-sm">
                        {work.title + ' '}
                        <span className="text-sm italic font-normal">
                          at {work.company}, {work.period}
                        </span>
                      </h3>
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
                                    <h3 className="font-bold text-sm">
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
                  );
              })}
            </ul>
          </div>
          {[0, 1, 2].includes(role.index) && (
            <div className="font-bold mt-2">
              <h4 className="font-bold mt-2 border-b-2 border-black inline-block">
                Achivements
              </h4>
              <ul className="border-l-2 border-black pl-4 ml-2">
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
          )}
          <div>
            <h4 className="font-bold mt-2 border-b-2 border-black pb-1">
              Education
            </h4>
            <ul>
              {eductation.map((course, index) => {
                return (
                  <li
                    key={index}
                    className="relative inline-block w-1/2 pt-2 before:bg-black before:content-center before:absolute before:left-[12px] before:top-[-8px] before:h-[14px] before:w-[2px]"
                  >
                    <h3 className="text-sm font-bold">
                      {course.title},{' '}
                      <span className="text-sm italic font-normal">
                        Aggregate {course.percentage}
                      </span>
                    </h3>
                    <h4 className="text-sm">
                      {course.university}, {course.period}
                    </h4>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

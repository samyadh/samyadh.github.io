import React from 'react';
import './me.module.scss';

export class Me extends React.Component {
  componentDidMount() {
    document.title =
      'Samyadh Jain | Programmer, Biker, Tech Enthusiast, Content Creator';
  }

  render() {
    return (
      <div className="min-h-screen flex flex-col content-center justify-around">
        <div className="xl:mx-16 mx-6">
          <div>
            <h1 className="xl:text-9xl font-extrabold xl:text-right text-center text-6xl lg:mb-4">
              Samyadh Jain
            </h1>
            <h3 className="xl:text-2xl text-base font-bold xl:text-right text-center mt-4">
              Programmer, Biker, Tech Enthusiast, Content Creator
            </h3>
          </div>
          <hr className="bg-green-600 h-1 mt-8 mb-4" />
          <div>
            <ul className="flex xl:justify-end  justify-evenly content-center">
              <li>
                <a
                  className="hover:bg-green-600"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/samyadh"
                >
                  <img alt="Github" src="assets/images/github.png" />
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-green-600"
                  target="_blank"
                  rel="noreferrer"
                  href="https://samyadh.medium.com/"
                >
                  <img alt="Medium" src="assets/images/blogger.png" />
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-green-600"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/riding.theory/"
                >
                  <img alt="Instagram" src="assets/images/instagram.png" />
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-green-600"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UCMPtRfKlSYolY_ySp424Icg"
                >
                  <img alt="Youtube" src="assets/images/youtube.png" />
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-green-600"
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:samyadh.jain@gmail.com"
                >
                  <img alt="Email" src="assets/images/email.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Me;

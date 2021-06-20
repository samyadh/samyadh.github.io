import './me.module.scss';

export function Me() {
  return (
    <div className="min-h-screen flex flex-col content-center justify-around">
      <div className="mx-16">
        <div>
          <h1 className="text-9xl font-extrabold text-right">Samyadh Jain</h1>
          <h3 className="text-2xl font-bold text-right mt-4">
            Programmer, Biker, Tech Enthusiast, Content Creator
          </h3>
        </div>
        <hr className="bg-green-600 h-1 mt-8 mb-4" />
        <div>
          <ul className="flex justify-end items-center">
            <li className="hover:bg-green-600">
              <a className="link" href="https://github.com/samyadh">
                <img alt="Github" src="assets/images/github.png" />
              </a>
            </li>
            <li className="hover:bg-green-600">
              <a className="link" href="https://samyadh.medium.com/">
                <img alt="Medium" src="assets/images/blogger.png" />
              </a>
            </li>
            <li className="hover:bg-green-600">
              <a
                className="link"
                href="https://www.instagram.com/riding.theory/"
              >
                <img alt="Instagram" src="assets/images/instagram.png" />
              </a>
            </li>
            <li className="hover:bg-green-600">
              <a
                className="link"
                href="https://www.youtube.com/channel/UCMPtRfKlSYolY_ySp424Icg"
              >
                <img alt="Youtube" src="assets/images/youtube.png" />
              </a>
            </li>
            <li className="hover:bg-green-600">
              <a className="link" href="mailto:samyadh.jain@gmail.com">
                <img alt="Email" src="assets/images/email.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Me;

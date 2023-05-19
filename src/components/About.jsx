import SectionTitle from './SectionTitle';
import myImg from '../images/adibg.png';
import { VscGithubInverted } from 'react-icons/vsc';

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Software Engineer who specialized in frontend side, but also have an
          ability to code in backend side. Very passionate about modern web
          technology using JavaScript while taking into consideration the latest
          trends and techniques.
        </p>
        <a
          href="mailto:adiansyahputrazia@gmail.com"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          adiansyahputrazia@gmail.com
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/adiansyahputra"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          <VscGithubInverted className="w-9 h-9" />
        </a>
      </div>
      <img
        className="w-full md:w-6/12 rounded-lg object-cover"
        src={myImg}
        alt="adiansyah putra"
      />
    </div>
  );
}

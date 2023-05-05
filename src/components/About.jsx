import SectionTitle from './SectionTitle';
import myImg from '../images/adibg.png';

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          veniam dolor consectetur pariatur explicabo, iure nulla. Dolor
          debitis, natus cum ad, fugiat excepturi minima culpa atque modi
          accusantium vel voluptatem?
        </p>
        <a
          href="mailto:adiansyahputrazia@gmail.com"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          adiansyahputrazia@gmail.com
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

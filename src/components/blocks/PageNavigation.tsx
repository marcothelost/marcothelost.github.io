import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppRoute } from '@utils/route';

export const PageNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center p-6">
      <div className="mr-6 h-8 w-8 rounded bg-zinc-700" />
      <ul className="flex gap-6">
        <li
          className={`transition-all hover:opacity-100${location.pathname.startsWith(AppRoute.HOME) ? ' opacity-100' : ' opacity-70'}`}
        >
          <Link to={AppRoute.HOME}>Home</Link>
        </li>
        <li
          className={`transition-all hover:opacity-100${location.pathname.startsWith(AppRoute.PROJECTS) ? ' opacity-100' : ' opacity-70'}`}
        >
          <Link to={AppRoute.HOME}>Projects</Link>
        </li>
        <li
          className={`transition-all hover:opacity-100${location.pathname.startsWith(AppRoute.TECHNOLOGIES) ? ' opacity-100' : ' opacity-70'}`}
        >
          <Link to={AppRoute.HOME}>Technologies</Link>
        </li>
        <li
          className={`transition-all hover:opacity-100${location.pathname.startsWith(AppRoute.EXPERIENCE) ? ' opacity-100' : ' opacity-70'}`}
        >
          <Link to={AppRoute.HOME}>Experience</Link>
        </li>
        <li
          className={`transition-all hover:opacity-100${location.pathname.startsWith(AppRoute.ABOUT_ME) ? ' opacity-100' : ' opacity-70'}`}
        >
          <Link to={AppRoute.HOME}>About me</Link>
        </li>
        <li
          className={`transition-all hover:opacity-100${location.pathname.startsWith(AppRoute.CONTACT_ME) ? ' opacity-100' : ' opacity-70'}`}
        >
          <Link to={AppRoute.HOME}>Contact me</Link>
        </li>
      </ul>
      <button className="ml-auto rounded bg-rose-800 px-4 py-2">
        Let&apos;s work together
      </button>
    </nav>
  );
};

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '@components/elements/Button';

import { AppRoute } from '@utils/route';

export const PageNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="p-6">
      <div className="mx-auto flex max-w-7xl items-center">
        <div className="mr-6 h-8 w-8 rounded bg-green-700" />
        <ul className="flex gap-6">
          <li
            className={`text-sm transition-all hover:opacity-100${location.pathname.startsWith(AppRoute.HOME) ? ' opacity-100' : ' opacity-70'}`}
          >
            <Link to={AppRoute.HOME}>Home</Link>
          </li>
          <li
            className={`text-sm transition-all hover:opacity-100${location.pathname.startsWith(AppRoute.PROJECTS) ? ' opacity-100' : ' opacity-70'}`}
          >
            <Link to={AppRoute.HOME}>Projects</Link>
          </li>
          <li
            className={`text-sm transition-all hover:opacity-100${location.pathname.startsWith(AppRoute.TECHNOLOGIES) ? ' opacity-100' : ' opacity-70'}`}
          >
            <Link to={AppRoute.HOME}>Technologies</Link>
          </li>
          <li
            className={`text-sm transition-all hover:opacity-100${location.pathname.startsWith(AppRoute.EXPERIENCE) ? ' opacity-100' : ' opacity-70'}`}
          >
            <Link to={AppRoute.HOME}>Experience</Link>
          </li>
          <li
            className={`text-sm transition-all hover:opacity-100${location.pathname.startsWith(AppRoute.ABOUT_ME) ? ' opacity-100' : ' opacity-70'}`}
          >
            <Link to={AppRoute.HOME}>About me</Link>
          </li>
          <li
            className={`text-sm transition-all hover:opacity-100${location.pathname.startsWith(AppRoute.CONTACT_ME) ? ' opacity-100' : ' opacity-70'}`}
          >
            <Link to={AppRoute.HOME}>Contact me</Link>
          </li>
        </ul>
        <Button text="Let's work together" variant="primary" icon="handshake" />
      </div>
    </nav>
  );
};

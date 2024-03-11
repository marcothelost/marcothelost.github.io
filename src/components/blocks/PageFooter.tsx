import React from 'react';

import { Icon } from '@components/elements/Icon';

export const PageFooter: React.FC = () => (
  <footer className="mt-auto border-t border-zinc-800 px-6 py-2 text-center">
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between">
      <span className="text-xs opacity-70">— marcothelost &copy; 2024</span>
      <span className="absolute left-1/2 -translate-x-1/2 transform text-xs opacity-70">
        Made with ❤️ in Czech Republic
      </span>
      <ul className="flex gap-3">
        <li className="opacity-70 transition-all hover:opacity-100">
          <a href="#">
            <Icon name="linkedin" type="fab" />
          </a>
        </li>
        <li className="opacity-70 transition-all hover:opacity-100">
          <a href="#">
            <Icon name="github" type="fab" />
          </a>
        </li>
        <li className="opacity-70 transition-all hover:opacity-100">
          <a href="#">
            <Icon name="mastodon" type="fab" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

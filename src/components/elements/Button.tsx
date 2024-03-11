import React, { useMemo } from 'react';

import { getButtonClassesForVariant } from '@utils/button';

export type ButtonVariant = 'primary' | 'default';

interface Props {
  variant?: ButtonVariant;
  text?: string;
}

export const Button: React.FC<Props> = ({ variant = 'default', text }) => {
  const classes = useMemo(() => getButtonClassesForVariant(variant), [variant]);

  return (
    <button
      className={`ml-auto rounded px-4 py-2 text-sm transition-all${classes ? ` ${classes}` : ''}`}
    >
      {text ?? null}
    </button>
  );
};

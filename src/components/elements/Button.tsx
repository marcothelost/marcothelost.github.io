import React, { useMemo } from 'react';

import { Icon } from './Icon';

import { getButtonClassesForVariant } from '@utils/button';

import type { IconName } from '@fortawesome/fontawesome-common-types';

export type ButtonVariant = 'primary' | 'default';

interface Props {
  variant?: ButtonVariant;
  text?: string;
  icon?: IconName;
}

export const Button: React.FC<Props> = ({
  variant = 'default',
  text,
  icon,
}) => {
  const classes = useMemo(() => getButtonClassesForVariant(variant), [variant]);

  return (
    <button
      className={`ml-auto flex items-center gap-2 rounded px-4 py-2 text-sm transition-all${classes ? ` ${classes}` : ''}`}
    >
      {icon ? <Icon name={icon} /> : null}
      {text ? <span>{text}</span> : null}
    </button>
  );
};

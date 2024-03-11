import React, { useMemo } from 'react';

import { Icon } from './Icon';

import { getButtonClasses } from '@utils/button';

import type { IconName } from '@fortawesome/fontawesome-common-types';

export type ButtonVariant = 'primary' | 'default';
export type ButtonSize = 'small' | 'default';

interface Props {
  variant?: ButtonVariant;
  size?: ButtonSize;
  text?: string;
  icon?: IconName;
}

export const Button: React.FC<Props> = ({
  variant = 'default',
  size = 'default',
  text,
  icon,
}) => {
  const classes = useMemo(
    () => getButtonClasses(variant, size),
    [variant, size]
  );

  return (
    <button
      className={`flex items-center gap-2 rounded px-4 py-2 transition-all${classes ? ` ${classes}` : ''}`}
    >
      {icon ? <Icon name={icon} size="sm" /> : null}
      {text ? <span>{text}</span> : null}
    </button>
  );
};

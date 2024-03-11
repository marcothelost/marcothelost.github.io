import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import type {
  IconName,
  IconPrefix,
  SizeProp,
} from '@fortawesome/fontawesome-svg-core';

interface Props {
  name: IconName;
  type?: IconPrefix;
  size?: SizeProp;
}

library.add(fas);
library.add(far);
library.add(fab);

export const Icon: React.FC<Props> = ({ name, type = 'fas', size }) => (
  <span>
    <FontAwesomeIcon icon={[type, name]} size={size} />
  </span>
);

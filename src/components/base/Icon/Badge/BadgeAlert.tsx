import React from 'react';
import cn from 'classnames';
import type { IconProps } from '../../../../types/iconProps';
import { BadgeAlertIcon } from 'lucide-react';

export const BadgeAlert: React.FC<IconProps> = ({ className }) => {
  return <BadgeAlertIcon className={cn('text-amber-400', className)} />;
};

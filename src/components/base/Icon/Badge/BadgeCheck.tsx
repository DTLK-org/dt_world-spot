import React from 'react';
import cn from 'classnames';
import type { IconProps } from '../../../../types/iconProps';
import { BadgeCheckIcon } from 'lucide-react';

export const BadgeCheck: React.FC<IconProps> = ({ className }) => {
  return <BadgeCheckIcon className={cn('text-amber-800', className)} />;
};

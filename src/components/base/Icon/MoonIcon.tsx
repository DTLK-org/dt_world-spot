import React from 'react';
import cn from 'classnames';
import type { IconProps } from '../../../types/iconProps';
import { MoonStar } from 'lucide-react';

export const MoonIcon: React.FC<IconProps> = ({ className }) => {
  return <MoonStar className={cn('w-7 h-7 text-moon', className)} />;
};

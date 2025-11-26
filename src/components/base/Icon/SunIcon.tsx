import React from 'react';
import cn from 'classnames';
import type { IconProps } from '../../../types/iconProps';
import { Sun } from 'lucide-react';

export const SunIcon: React.FC<IconProps> = ({ className }) => {
  return <Sun className={cn('w-7 h-7 text-sun', className)} />;
};

import React from 'react';
import cn from 'classnames';
import type { IconProps } from '../../../types/iconProps';
import { House } from 'lucide-react';

export const HouseIcon: React.FC<IconProps> = ({ className }) => {
  return <House className={cn('text-amber-900', className)} />;
};

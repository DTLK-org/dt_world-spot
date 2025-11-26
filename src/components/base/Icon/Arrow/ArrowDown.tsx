import React from 'react';
import cn from 'classnames';
import type { IconProps } from '../../../../types/iconProps';
import { ChevronDown } from 'lucide-react';

export const ArrowDown: React.FC<IconProps> = ({ className }) => {
  return <ChevronDown className={cn('text-amber-800', className)} />;
};

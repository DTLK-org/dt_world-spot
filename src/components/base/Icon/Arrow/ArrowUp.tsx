import React from 'react';
import cn from 'classnames';
import type { IconProps } from '../../../../types/iconProps';
import { ChevronUp } from 'lucide-react';

export const ArrowUp: React.FC<IconProps> = ({ className }) => {
  return <ChevronUp className={cn('text-amber-500', className)} />;
};

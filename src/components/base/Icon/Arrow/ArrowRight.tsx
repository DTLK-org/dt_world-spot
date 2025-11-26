import React from 'react';
import cn from 'classnames';
import type { IconProps } from '../../../../types/iconProps';
import { ChevronRight } from 'lucide-react';

export const ArrowRight: React.FC<IconProps> = ({ className }) => {
  return <ChevronRight className={cn('text-amber-400', className)} />;
};

import React from 'react';
import cn from 'classnames';
import type { IconProps } from '../../../../types/iconProps';
import { ChevronLeft } from 'lucide-react';

export const ArrowLeft: React.FC<IconProps> = ({ className }) => {
  return <ChevronLeft className={cn('text-amber-600', className)} />;
};

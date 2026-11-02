'use client';

import * as React from 'react';
import { Progress as AntdProgress } from 'antd';
import { cn } from '@/lib/utils';
import styles from '@/themes/styles/progress.module.scss';

interface ProgressProps {
  className?: string;
  value?: number;
  color?: string; // Keep for compatibility, but ignored
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, color, ...props }, ref) => {
    const safeValue = value ?? 0;
    const darkBlue = '#1e40af'; // Tailwind blue-800

    return (
      <div className={cn('relative', className)}>
        <AntdProgress
          ref={ref}
          className={cn(styles.progressBar, 'h-4', className)}
          percent={safeValue}
          strokeColor={darkBlue}
          showInfo={false}
          strokeWidth={8}
          {...props}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export { Progress };
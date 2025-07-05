'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const Portfolio = dynamic(() => import('./Portfolio'), {
  loading: () => (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <Skeleton className="h-10 w-48 mx-auto mb-12" />
        <div className="w-full max-w-5xl mx-auto">
          <Skeleton className="h-12 w-full mb-8" />
          <div className="grid sm:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  ssr: false,
});

export default Portfolio;

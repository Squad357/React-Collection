import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

export const CategoryComponents: Record<string, ComponentType<unknown>> = {
  1: dynamic(() => import('@/app/headers/page')),
  2: dynamic(() => import('@/app/headers/page')),
  3: dynamic(() => import('@/app/tabs/tab1')),
  4: dynamic(() => import('@/app/tabs/tab2')),
};

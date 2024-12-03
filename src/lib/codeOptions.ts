'use client';
import { CodeOption as Tab1CodeOptions } from '@/collections/tabs/tab1';

interface CodeOptionProps {
  key: string;
  label: string;
  value: string;
  options?: Array<{
    value: string;
    label: string;
  }>;
}

export const CodeOptions: Record<string, CodeOptionProps[]> = {
  3: Tab1CodeOptions,
};

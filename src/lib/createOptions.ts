'use client';
import { createOption as Tab1CreateOption } from '@/collections/tabs/tab1';

export const CreateOptions: Record<string, () => Record<string, string>> = {
  3: Tab1CreateOption,
};

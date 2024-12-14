import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'], // Add this line to specify the subset
  weight: ['400', '700'],  // Add weights if needed
});
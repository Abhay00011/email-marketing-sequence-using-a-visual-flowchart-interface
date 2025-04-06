export type NodeType = 'coldEmail' | 'delay' | 'leadSource';

export interface EmailData {
  to: string;
  subject: string;
  text: string;
}

export interface DelayData {
  delay: number; // milliseconds
}

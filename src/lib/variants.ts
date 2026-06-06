import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'rounded px-5 py-2.5 text-sm font-mono transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary font-semibold text-primary-foreground hover:bg-primary-hover',
        ghost: 'border border-border text-muted-foreground hover:border-primary hover:text-primary',
      },
    },
    defaultVariants: {
      variant: 'ghost',
    },
  },
);

export const navLinkVariants = cva('text-sm font-mono transition-colors', {
  variants: {
    active: {
      true: 'text-primary',
      false: 'text-muted-foreground hover:text-foreground',
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const cardVariants = cva(
  'group flex flex-col gap-4 rounded-lg border p-6 transition-colors',
  {
    variants: {
      featured: {
        true: 'border-primary/40 bg-surface hover:border-primary/70',
        false: 'border-border bg-surface hover:border-muted-foreground/30',
      },
    },
    defaultVariants: {
      featured: false,
    },
  },
);

export const tagVariants = cva('text-xs font-mono', {
  variants: {
    style: {
      badge: 'rounded border border-primary/40 px-2 py-0.5 text-primary',
      inline: 'text-primary/80',
      pill: 'rounded bg-muted px-2 py-0.5 text-muted-foreground',
    },
  },
});

export const skillLevelVariants = cva('text-xs font-mono', {
  variants: {
    level: {
      Advanced: 'text-primary',
      Intermediate: 'text-foreground',
      Beginner: 'text-muted-foreground',
    },
  },
});

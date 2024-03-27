import React from 'react';
import { EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { Button, ButtonProps } from '@/components/ui/button';

interface ButtonWithIconProps extends ButtonProps {
  icon: React.ReactNode;
  text: string;
}

export function ButtonWithIcon({ icon, text, ...buttonProps }: ButtonWithIconProps) {
  return (
    <Button {...buttonProps}>
      {icon} {text}
    </Button>
  );
}

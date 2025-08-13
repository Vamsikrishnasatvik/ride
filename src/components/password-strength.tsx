"use client"

import React from 'react';

interface PasswordStrengthProps {
  password?: string;
}

export function PasswordStrength({ password = '' }: PasswordStrengthProps) {
  const getStrength = (pass: string) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length > 8) score++;
    if (pass.match(/[a-z]/)) score++;
    if (pass.match(/[A-Z]/)) score++;
    if (pass.match(/[0-9]/)) score++;
    if (pass.match(/[^a-zA-Z0-9]/)) score++;
    return score;
  };

  const strength = getStrength(password);

  const strengthLabel = () => {
    switch (strength) {
      case 0:
      case 1:
      case 2:
        return 'Weak';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      case 5:
        return 'Very Strong';
      default:
        return '';
    }
  };

  const strengthColor = () => {
    switch (strength) {
      case 0:
      case 1:
      case 2:
        return 'bg-red-500';
      case 3:
        return 'bg-yellow-500';
      case 4:
      case 5:
        return 'bg-green-500';
      default:
        return 'bg-muted';
    }
  };

  if (!password) return null;

  return (
    <div className="flex items-center gap-2 mt-2">
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${strengthColor()}`}
          style={{ width: `${(strength / 5) * 100}%` }}
        />
      </div>
      <span className="text-sm text-muted-foreground w-24 text-right">{strengthLabel()}</span>
    </div>
  );
}

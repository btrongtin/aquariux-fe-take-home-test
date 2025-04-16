
import React from 'react';
import { AlertTriangle, AlertCircle, XOctagon } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  const isApiError = message.includes('API key');
  const isRateLimit = message.includes('rate limit');
  
  const Icon = isApiError ? XOctagon : isRateLimit ? AlertCircle : AlertTriangle;
  
  return (
    <Alert variant="destructive" className="mt-4">
      <Icon className="h-5 w-5" />
      <AlertDescription className="ml-2">{message}</AlertDescription>
    </Alert>
  );
};

export default ErrorDisplay;
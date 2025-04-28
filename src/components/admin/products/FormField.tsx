import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  min?: string;
  required?: boolean;
  className?: string;
}

/**
 * Reusable form field component for product form
 */
const FormField = ({ 
  id, 
  label, 
  value, 
  onChange, 
  type = "text", 
  placeholder, 
  min, 
  required,
  className = "bg-transparent border-cyan-500/30",
}: FormFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      min={min}
      required={required}
    />
  </div>
);

export default FormField;

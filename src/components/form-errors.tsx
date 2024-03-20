import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
interface FormErrorsProps {
  messages: string | undefined;
}
export const FormErrors = ({ messages }: FormErrorsProps) => {
  if (!messages) return null;
  return (
    <div className="flex items-center gap-x-2 text-sm text-destructive bg-destructive/15 p-3">
      <ExclamationTriangleIcon className="w-5 h-5" />
      <p>{messages}</p>
    </div>
  );
};

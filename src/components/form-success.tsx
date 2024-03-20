import { CheckCircledIcon } from "@radix-ui/react-icons";
interface FormErrorsProps {
  messages: string | undefined;
}
export const FormSuccess = ({ messages }: FormErrorsProps) => {
  if (!messages) return null;
  return (
    <div className="flex items-center gap-x-2 text-sm text-emerald-500 bg-emerald-500/15 p-3">
      <CheckCircledIcon className="w-5 h-5" />
      <p>{messages}</p>
    </div>
  );
};

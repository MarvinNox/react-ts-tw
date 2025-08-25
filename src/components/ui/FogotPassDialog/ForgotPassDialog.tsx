import { useState, type ReactElement } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { recoverPassword } from "@/service/api/authService";
import type { RecoverUser } from "@/types/user";
import FormField from "../FormField/FormField";

interface ForgotPassDialogProps {
  trigger: ReactElement;
}

export default function ForgotPassDialog({ trigger }: ForgotPassDialogProps) {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: (data: RecoverUser) => recoverPassword(data),
    onSuccess: () => {
      setTimeout(() => {
        setOpen(false);
      }, 2000);
      setEmail("");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-black">
          <DialogTitle>Forget password?</DialogTitle>
          <DialogDescription>
            Enter your email and below and we send recovery mail
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 text-gray-600">
            <FormField
              id="password"
              label="Password"
              error={isError ? error.message : undefined}
            >
              <Input
                id="signup-email"
                type="email"
                placeholder="mail@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormField>
          </div>
          <DialogFooter className="grid grid-cols-1">
            <Button
              disabled={isPending || isSuccess}
              variant="default"
              type="submit"
            >
              {isSuccess
                ? "Link sent to your email"
                : isPending
                ? "Sending..."
                : "Request reset link"}
            </Button>
            <Button
              type="button"
              onClick={() => setOpen(false)}
              variant="outline"
              className="text-black"
            >
              Go Back
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

import { useState, type ReactElement } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { userValidationSchema } from "@/validation/userSchema";
import type { UserFormData } from "@/types/user";

interface ForgotPassDialogProps {
  trigger: ReactElement;
}

export default function ForgotPassDialog({ trigger }: ForgotPassDialogProps) {
  const [open, setOpen] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidationSchema),
    mode: "onSubmit",
  });

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: RecoverUser) => recoverPassword(data),
    onSuccess: () => {
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    },
  });

  const onSubmit = (data: UserFormData) => {
    mutate(data);
    reset();
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
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4"
        >
          <div className="grid gap-4 text-gray-600">
            <FormField
              id="email-recovery"
              label="Password"
              error={errors.email?.message}
            >
              <Input
                id="email-recovery"
                type="email"
                placeholder="mail@example.com"
                {...register("email")}
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

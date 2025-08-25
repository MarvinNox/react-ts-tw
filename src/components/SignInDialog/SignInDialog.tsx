import { useState, type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
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
import { X } from "lucide-react";
import ForgotPassDialog from "../FogotPassDialog/ForgotPassDialog";
import type { User } from "@/types/user";
import { loginUser } from "@/service/api/authService";
import FormField from "../FormField/FormField";
import { userValidationSchema } from "@/validation/userSchema";
import type { UserFormData } from "@/types/user";

interface SignInDialogProps {
  trigger: ReactElement;
}

export default function SignInDialog({ trigger }: SignInDialogProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidationSchema),
    mode: "onSubmit",
  });
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: User) => loginUser(data),
    onSuccess: () => {
      setTimeout(() => {
        setIsOpen(false);
        navigate("/", { replace: true });
      }, 1000);
    },
  });

  const onSubmit = (data: UserFormData) => {
    mutate(data);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-black">
          <DialogTitle>Sign-In</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 scale-150"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </Button>
          <DialogDescription>
            Enter your email below to login to your account
          </DialogDescription>
        </DialogHeader>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4"
        >
          <div className="grid gap-4 text-gray-600">
            <FormField id="email" label="Email" error={errors.email?.message}>
              <Input
                id="signup-email"
                type="email"
                placeholder="mail@example.com"
                {...register("email")}
              />
            </FormField>
            <FormField
              id="password"
              label="Password"
              error={errors.password?.message}
            >
              <Input
                id="signup-password"
                type="password"
                {...register("password")}
              />
              <ForgotPassDialog
                trigger={
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                }
              ></ForgotPassDialog>
            </FormField>
          </div>
          <DialogFooter className="grid grid-cols-1">
            <Button disabled={isSuccess} variant="default" type="submit">
              {isSuccess ? "Succsess!" : isPending ? "Loading..." : "Sign-in"}
            </Button>
            <Button variant="outline" type="button" className="text-black">
              Login with Google
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

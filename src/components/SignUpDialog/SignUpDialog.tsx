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
import type { User } from "@/types/user";
import { registerUser } from "@/service/api/authService";
import FormField from "../FormField/FormField";
import { userValidationSchema } from "@/validation/userSchema";
import type { UserFormData } from "@/types/user";

interface SignUpDialogProps {
  trigger: ReactElement;
}

export default function SignUpDialog({ trigger }: SignUpDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidationSchema),
    mode: "onSubmit",
  });
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: User) => registerUser(data),
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
          <DialogTitle>Sign-Up</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 scale-150"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </Button>
          <DialogDescription>
            Enter your email and password below to register your account
          </DialogDescription>
        </DialogHeader>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4"
        >
          <div className="grid gap-4 text-gray-600">
            <FormField
              id="signup-email"
              label="Email"
              error={errors.email?.message}
            >
              <Input
                id="signup-email"
                type="email"
                placeholder="mail@example.com"
                {...register("email")}
              />
            </FormField>
            <FormField
              id="signup-password"
              label="Password"
              error={errors.password?.message}
            >
              <Input
                id="signup-password"
                type="password"
                {...register("password")}
              />
            </FormField>
          </div>
          <DialogFooter className="grid grid-cols-1">
            <Button disabled={isSuccess} variant="default" type="submit">
              {isSuccess ? "Succsess!" : isPending ? "Loading..." : "Register"}
            </Button>
            <Button variant="outline" className="text-black">
              Register with Google
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

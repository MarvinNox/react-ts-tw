import { useState, type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
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
import { X } from "lucide-react";

import type { User } from "@/types/user";
import { registerUser } from "@/service/api/authService";
import FormField from "../FormField/FormField";

interface SignUpDialogProps {
  trigger: ReactElement;
}

export default function SignUpDialog({ trigger }: SignUpDialogProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: (data: User) => registerUser(data),
    onSuccess: () => {
      setTimeout(() => {
        setIsOpen(false);
        navigate("/", { replace: true });
      }, 1000);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email, password });
    setEmail("");
    setPassword("");
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
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 text-gray-600">
            <FormField
              id="email"
              label="Email"
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
            <FormField
              id="password"
              label="Password"
              error={isError ? error.message : undefined}
            >
              <Input
                id="signup-password"
                type="password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import ForgotPassDialog from "../FogotPassDialog/ForgotPassDialog";
import type { User } from "@/types/user";
import { loginUser } from "@/service/api/authService";

interface SignInDialogProps {
  trigger: ReactElement;
}

export default function SignInDialog({ trigger }: SignInDialogProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: (data: User) => loginUser(data),
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
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 text-gray-600">
            <div className="grid gap-3">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="mail@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="signup-password">Password</Label>
              <Input
                id="signup-password"
                type="password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isError && (
                <p className="text-sm text-red-500 mt-2">
                  Something went wrong. {error.message}
                </p>
              )}
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
            </div>
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

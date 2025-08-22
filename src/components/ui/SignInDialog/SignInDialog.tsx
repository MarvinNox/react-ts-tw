import type { ReactElement } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
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

interface SignInDialogProps {
  trigger: ReactElement;
}

export default function SignInDialog({ trigger }: SignInDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-black">
          <DialogTitle>Sign-In</DialogTitle>
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 scale-150"
            >
              <X />
            </Button>
          </DialogClose>
          <DialogDescription>
            Enter your email below to login to your account
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 text-gray-600">
          <div className="grid gap-3">
            <Label htmlFor="signup-email">Email</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="mail@example.com"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="signup-password">Password</Label>
            <Input
              id="signup-password"
              type="password"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              required
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
          </div>
        </div>

        <DialogFooter className="grid grid-cols-1">
          <Button variant="default" type="submit">
            Sign-in
          </Button>
          <Button variant="outline" className="text-black">
            Login with Google
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

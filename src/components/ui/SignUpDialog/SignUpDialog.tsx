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

interface SignUpDialogProps {
  trigger: ReactElement;
}

export default function SignUpDialog({ trigger }: SignUpDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-black">
          <DialogTitle>Sign-Up</DialogTitle>
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
            Enter your email and password below to register your account
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
          </div>
        </div>

        <DialogFooter className="grid grid-cols-1">
          <Button variant="default" type="submit">
            Register
          </Button>
          <Button variant="outline" className="text-black">
            Register with Google
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

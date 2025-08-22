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

interface ForgotPassDialogProps {
  trigger: ReactElement;
}

export default function ForgotPassDialog({ trigger }: ForgotPassDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-black">
          <DialogTitle>Forget password?</DialogTitle>
          <DialogDescription>
            Enter your email and below and we send recovery mail
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
        </div>

        <DialogFooter className="grid grid-cols-1">
          <Button variant="default" type="submit">
            Request reset link
          </Button>
          <DialogClose asChild>
            <Button variant="outline" className="text-black">
              Go Back
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

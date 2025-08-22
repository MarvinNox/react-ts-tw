import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SignUpDialog from "@/components/ui/SignUpDialog/SignUpDialog";
import ForgotPassDialog from "@/components/ui/FogotPassDialog/ForgotPassDialog";
import type { User } from "@/types/user";
import { loginUser } from "@/service/api/authService";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: (data: User) => loginUser(data),
    onSuccess: () => {
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
    },
  });

  const handleSubmit = () => {
    mutate({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="grid place-items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <SignUpDialog trigger={<Button variant="ghost">Sign-Up</Button>} />
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
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
                <Input
                  id="password"
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
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            disabled={isSuccess}
            type="button"
            variant="default"
            className="w-full"
            onClick={handleSubmit}
          >
            {isSuccess ? "Succsess!" : isPending ? "Loading..." : "Sign-In"}
          </Button>
          <Button variant="outline" className="w-full">
            Sign-in with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

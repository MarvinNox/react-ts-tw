import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { User } from "@/types/user";
import { registerUser } from "@/service/api/authService";
import FormField from "@/components/ui/FormField/FormField";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: (data: User) => registerUser(data),
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
          <CardTitle className="text-2xl">Sign-Up</CardTitle>
          <CardDescription>
            Create your account. Enter your email and password below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <FormField
                id="email"
                label="Email"
                error={isError ? error.message : undefined}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormField>
              <div className="grid gap-2">
                <FormField
                  id="password"
                  label="Password"
                  error={isError ? error.message : undefined}
                >
                  <Input
                    id="password"
                    type="password"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormField>
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
            {isSuccess ? "Succsess!" : isPending ? "Loading..." : "Sign-Up"}
          </Button>
          <Button variant="outline" className="w-full">
            Sign-Up with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

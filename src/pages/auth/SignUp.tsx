import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
import FormField from "@/components/FormField/FormField";
import { userValidationSchema } from "@/validation/userSchema";

export default function SignUp() {
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

  type SignUpFormData = yup.InferType<typeof userValidationSchema>;

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: User) => registerUser(data),
    onSuccess: () => {
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    mutate(data);
    reset();
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
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <FormField
                id="signUp-email"
                label="Email"
                error={errors.email?.message}
              >
                <Input
                  id="signUp-email"
                  type="email"
                  placeholder="mail@example.com"
                  {...register("email")}
                />
              </FormField>
              <div className="grid gap-2">
                <FormField
                  id="signUp-password"
                  label="Password"
                  error={errors.password?.message}
                >
                  <Input
                    id="signUp-password"
                    type="password"
                    {...register("password")}
                  />
                </FormField>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              disabled={isSuccess}
              type="submit"
              variant="default"
              className="w-full"
            >
              {isSuccess ? "Succsess!" : isPending ? "Loading..." : "Sign-Up"}
            </Button>
            <Button variant="outline" className="w-full">
              Sign-Up with Google
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import SignUpDialog from "@/components/SignUpDialog/SignUpDialog";
import ForgotPassDialog from "@/components/FogotPassDialog/ForgotPassDialog";
import type { User } from "@/types/user";
import { loginUser } from "@/service/api/authService";
import FormField from "@/components/FormField/FormField";
import { userValidationSchema } from "@/validation/userSchema";
import type { UserFormData } from "@/types/user";

export default function SignIn() {
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidationSchema),
    mode: "onSubmit",
  });

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: User) => loginUser(data),
    onSuccess: () => {
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
    },
  });

  const onSubmit = (data: UserFormData) => {
    mutate(data);
    reset();
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
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="flex flex-col gap-6">
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
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              disabled={isSuccess}
              type="button"
              variant="default"
              className="w-full"
            >
              {isSuccess ? "Succsess!" : isPending ? "Loading..." : "Sign-In"}
            </Button>
            <Button variant="outline" className="w-full">
              Sign-in with Google
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

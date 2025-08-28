import { useState, type ReactElement } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import type { Source, SourceFormData } from "@/types/user";
import { addSource } from "@/service/api/authService";
import FormField from "../FormField/FormField";
import { addSourceValidationSchema } from "@/validation/userSchema";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { toast } from "react-toastify";

interface SignUpDialogProps {
  trigger: ReactElement;
}

export default function EditSource({ trigger }: SignUpDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addSourceValidationSchema),
    mode: "onSubmit",
    defaultValues: {
      activity: true,
    },
  });
  const [isOpen, setIsOpen] = useState(false);

  const {
    mutate,
    isPending,
    isSuccess,
    reset: resetMutation,
  } = useMutation({
    mutationFn: (data: Source) => addSource(data),
    onSuccess: () => {
      toast.success("Source has been edited!", {
        position: "top-center",
        closeButton: false,
        hideProgressBar: true,
      });
      setTimeout(() => {
        setIsOpen(false);
        resetMutation();
      }, 1000);
    },
  });

  const onSubmit = (data: SourceFormData) => {
    mutate(data);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-8">
        <DialogHeader className="text-black text-left">
          <DialogTitle className="items-center justify-between flex">
            Edit Source
            <Button
              variant="ghost"
              size="icon"
              className=""
              onClick={() => setIsOpen(false)}
            >
              <X />
            </Button>
          </DialogTitle>
        </DialogHeader>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4"
        >
          <div className="grid gap-4 text-gray-600">
            <FormField
              id="source-name"
              label="Name"
              error={errors.name?.message}
            >
              <Input
                id="source-name"
                type="text"
                placeholder="Source-name-1"
                {...register("name")}
              />
            </FormField>
            <FormField
              id="source-type"
              label="Type"
              error={errors.type?.message}
            >
              <Input
                id="source-type"
                type="text"
                placeholder="Type-1"
                {...register("type")}
              />
            </FormField>
            <FormField
              id="source-config"
              label="Configuration"
              error={errors.configuration?.message}
            >
              <Input
                id="source-config"
                type="text"
                placeholder="https://www.youtube.com/"
                {...register("configuration")}
              />
            </FormField>
            <Controller
              name="activity"
              control={control}
              defaultValue={true}
              render={({ field }) => (
                <div className="flex justify-between my-4">
                  <Label htmlFor="activity-mode">Airplane Mode</Label>
                  <div className="flex items-center gap-3">
                    <Switch
                      id="activity-mode"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-blue-600"
                    />
                    {field.value ? <p>On</p> : <p>Off</p>}
                  </div>
                </div>
              )}
            />
          </div>
          <DialogFooter className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="text-black py-3 px-6 rounded-[8px] m-w-20 max-h-12"
            >
              Cancel
            </Button>
            <Button
              disabled={isSuccess}
              variant="default"
              type="submit"
              className="bg-[#2175FE] bg-[linear-gradient(220deg,rgba(42,87,252,1)_30%,rgba(150,72,246)_125%)] py-3 px-6 rounded-[8px] m-w-20 m-h-12"
            >
              {isSuccess ? "Succsess!" : isPending ? "Loading..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

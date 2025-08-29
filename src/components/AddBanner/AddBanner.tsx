import { useState, type ReactElement } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
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
import { ImageUp, Upload, X } from "lucide-react";
import type { Banner, BannerFormData } from "@/types/user";
import { addBanner } from "@/service/api/authService";
import FormField from "../FormField/FormField";
import { addBannerValidationSchema } from "@/validation/userSchema";
import { toast } from "react-toastify";
import Dropzone from "react-dropzone";

interface SignUpDialogProps {
  trigger: ReactElement;
}

export default function AddBanner({ trigger }: SignUpDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addBannerValidationSchema),
    mode: "onBlur",
  });
  const [isOpen, setIsOpen] = useState(false);

  const {
    mutate,
    isPending,
    isSuccess,
    reset: resetMutation,
  } = useMutation({
    mutationFn: (data: Banner) => addBanner(data),
    onSuccess: () => {
      toast.success(`New source has been added`, {
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

  const onSubmit = (data: BannerFormData) => {
    mutate(data);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-8">
        <DialogHeader className="text-black text-left">
          <DialogTitle className="items-center justify-between flex mb-3">
            Add Banner
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
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div
                    {...getRootProps()}
                    className="bg-blue-100/30 py-4 pl-4 pr-6 rounded-xl flex items-center"
                  >
                    <input {...getInputProps()} />
                    <ImageUp size={50} color="CornflowerBlue" />
                    <div className="ml-2">
                      <p className="text-base font-medium">Upload the file</p>
                      <p className="text-xs font-normal">
                        Supports PNG, JPEG files up to 100 MB{" "}
                      </p>
                    </div>
                    <Upload className="ml-auto" color="DodgerBlue" />
                  </div>
                </section>
              )}
            </Dropzone>
            <FormField
              id="source-title"
              label="Title"
              error={errors.title?.message}
            >
              <Input
                id="source-title"
                type="text"
                placeholder="Banner Title"
                {...register("title")}
              />
            </FormField>
            <FormField
              id="source-link"
              label="Link"
              error={errors.link?.message}
            >
              <Input
                id="source-link"
                type="text"
                placeholder="URL address to banner"
                {...register("link")}
              />
            </FormField>
            <FormField
              id="source-position"
              label="Position"
              error={errors.position?.message}
            >
              <Input
                id="source-position"
                type="text"
                placeholder="Banner Location"
                {...register("position")}
              />
            </FormField>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                id="source-activeFrom"
                label="Active from"
                error={errors.activeFrom?.message}
              >
                <Input
                  id="source-activeFrom"
                  type="datetime-local"
                  placeholder="Banner Locatio"
                  {...register("activeFrom")}
                />
              </FormField>
              <FormField
                id="source-activeTo"
                label="Active to"
                error={errors.activeTo?.message}
              >
                <Input
                  id="source-activeTo"
                  type="datetime-local"
                  placeholder="Active from"
                  {...register("activeTo")}
                />
              </FormField>
            </div>
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
              {isSuccess ? "Succsess!" : isPending ? "Loading..." : "Add"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

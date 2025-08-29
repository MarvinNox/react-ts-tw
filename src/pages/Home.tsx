import { Button } from "@/components/ui/button";
import SignInDialog from "@/components/SignInDialog/SignInDialog";
import SignUpDialog from "@/components/SignUpDialog/SignUpDialog";
import { Flame } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="grid grid-cols-1 gap-4">
          <h1 className="text-3xl font-bold">Bienvenido a Cochefy.</h1>
          <p>¡Encuentra tu vehículo soñado ahora!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-1">
            <SignInDialog
              trigger={
                <Button className="text-base font-normal">
                  <Flame fill="white" />
                  Comienza ahora
                </Button>
              }
            />
            <SignUpDialog
              trigger={<Button variant="secondary">Sign-Up</Button>}
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            className="rounded-2xl h-auto max-w-full"
            src="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
            alt="placeholder"
          />
        </div>
      </div>
    </>
  );
}

import { Button } from "@/components/ui/button";
import SignInDialog from "@/components/SignInDialog/SignInDialog";
import SignUpDialog from "@/components/SignUpDialog/SignUpDialog";

export default function Home() {
  return (
    <>
      <h1 className="text-6xl font-bold text-center mb-12">
        Welcome to Cochefy
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="grid grid-cols-1 gap-4">
          <h2 className="text-3xl font-bold">Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            nesciunt voluptatum perferendis autem minima ut quis repellendus
            ratione dolor, soluta nam obcaecati. Doloribus minima tenetur
            provident iure sequi dignissimos vero.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-1">
            <SignInDialog trigger={<Button>Sign-in</Button>} />
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

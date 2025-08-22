import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <form
      className="relative
          bg-[var(--context-background-fill-overlay-white-primary-bg-fill-overlay-w-primary)] 
        shadow-xs p-8 border rounded-2xl h-auto w-auto md:h-[500px] md:w-[500px] mx-auto my-8"
    >
      <button type="button" className="cursor-pointer">
        <svg
          className="fill-[var(--context-text-base-primary-text-base-primary)] absolute right-[5%] top-[5%]"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <path d="M1.13807 0.195262C0.877722 -0.0650874 0.455612 -0.0650874 0.195262 0.195262C-0.0650874 0.455612 -0.0650874 0.877722 0.195262 1.13807L5.05719 6L0.195263 10.8619C-0.0650863 11.1223 -0.0650863 11.5444 0.195263 11.8047C0.455612 12.0651 0.877723 12.0651 1.13807 11.8047L6 6.94281L10.8619 11.8047C11.1223 12.0651 11.5444 12.0651 11.8047 11.8047C12.0651 11.5444 12.0651 11.1223 11.8047 10.8619L6.94281 6L11.8047 1.13807C12.0651 0.877722 12.0651 0.455612 11.8047 0.195262C11.5444 -0.0650874 11.1223 -0.0650874 10.8619 0.195262L6 5.05719L1.13807 0.195262Z" />
        </svg>
      </button>
      <h2 className="text-[var(--context-text-base-primary-text-base-primary)] font-bold text-2xl mb-14 mt-10">
        Sign-in
      </h2>
      <div className="flex flex-col gap-3 mb-4">
        <label
          className="text-base text-[var(--context-text-base-primary-text-base-primary)] font-bold"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="py-1.5 px-3 w-auto h-8 
              text-[var(--context-text-base-tertiary-text-base-tertiary)]
              border rounded-[8px]
              border-[var(--context-border-base-primary-border-base-primary)]
              hover:border-[var(--context-border-base-primary-border-base-primary-hover)]
              bg-[var(--context-background-surface-base-primary-bg-surface-base-primary)]
              focus:border-[var(--context-border-solid-border-brand-solid)]
              focus:bg-[var(--context-background-surface-base-primary-bg-surface-base-primary)]
              focus:shadow-[0_0_0_3px_var(--theme-brand-blue-300)]
              outline-0
              invalid:border-[var(--context-border-solid-border-danger-solid)]
              invalid:focus:border-[var(--context-border-solid-border-danger-solid)]
              invalid:focus:shadow-[0_0_0_3px_var(--theme-danger-300)]
              "
          placeholder="Enter email"
        />
      </div>
      <div className="flex flex-col gap-3 mb-12">
        <label
          className="text-base text-[var(--context-text-base-primary-text-base-primary)] font-bold"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="py-1.5 px-3 w-auto h-8 
              text-[var(--context-text-base-tertiary-text-base-tertiary)]
              border rounded-[8px]
              border-[var(--context-border-base-primary-border-base-primary)]
              hover:border-[var(--context-border-base-primary-border-base-primary-hover)]
              bg-[var(--context-background-surface-base-primary-bg-surface-base-primary)]
              focus:border-[var(--context-border-solid-border-brand-solid)]
              focus:bg-[var(--context-background-surface-base-primary-bg-surface-base-primary)]
              focus:shadow-[0_0_0_3px_var(--theme-brand-blue-300)]
              outline-0
              invalid:border-[var(--context-border-solid-border-danger-solid)]
              invalid:focus:border-[var(--context-border-solid-border-danger-solid)]
              invalid:focus:shadow-[0_0_0_3px_var(--theme-danger-300)]
              "
          placeholder="Enter password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        />
      </div>
      <Button type="submit" variant="default" className="w-full">
        Login
      </Button>
    </form>
  );
}

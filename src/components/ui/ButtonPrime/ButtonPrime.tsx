export default function ButtonPrime({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="cursor-pointer disabled:cursor-not-allowed mr-2 px-3 py-2 min-w-15 h-10 rounded-md transition-colors ease-in-out duration-300 
    text-[var(--context-text-overlay-white-primary-text-overlay-w-primary)] text-base
    bg-[var(--context-background-fill-brand-blue-primary-bg-fill-brand-primary)]
    hover:bg-[var(--context-background-fill-brand-blue-primary-bg-fill-brand-primary-hover)]
    active:bg-[var(--context-background-fill-brand-blue-primary-bg-fill-brand-primary-active)]
    disabled:bg-[var(--context-background-fill-brand-blue-primary-bg-fill-brand-primary-disabled)]
    focus:bg-[var(--context-background-fill-brand-blue-primary-bg-fill-brand-primary)]
    "
    >
      {children}
    </button>
  );
}

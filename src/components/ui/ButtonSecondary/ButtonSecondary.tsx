export default function ButtonSecondary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="cursor-pointer disabled:cursor-not-allowed mr-2 px-3 py-2 min-w-15 h-10 rounded-md transition-colors ease-in-out duration-300
     border border-[var(--context-border-brand-blue-primary-border-brand-primary] 
     hover:border-[var(--context-border-brand-blue-primary-border-brand-primary-hover)]
     disabled:border-[var(--context-border-brand-blue-primary-border-brand-primary-disabled)]
     text-[var(--context-text-brand-blue-text-brand)]
     hover:text-[var(--context-text-brand-blue-text-brand-hover)]
     active:text-[var(--context-text-brand-blue-text-brand-active)]
     disabled:text-[var(--context-text-brand-blue-text-brand-disabled)]
     bg-[var(--context-background-surface-base-primary-bg-surface-base-primary)]"
    >
      {children}
    </button>
  );
}

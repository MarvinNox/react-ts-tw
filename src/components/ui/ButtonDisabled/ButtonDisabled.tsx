export default function ButtonDisabled({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      disabled
      className="cursor-pointer disabled:cursor-not-allowed mr-2 px-3 py-2 min-w-15 h-10 rounded-md transition-colors ease-in-out duration-300
      bg-[var(--context-background-fill-danger-primary-bg-fill-danger-primary)]
      hover:bg-[var(--context-background-fill-danger-primary-bg-fill-danger-primary-hover)]
      active:bg-[var(--context-background-fill-danger-primary-bg-fill-danger-primary-active)]
      disabled:bg-[var(--context-background-fill-danger-primary-bg-fill-danger-primary-disabled)]
      "
    >
      {children}
    </button>
  );
}

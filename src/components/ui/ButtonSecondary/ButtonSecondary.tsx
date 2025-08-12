export default function ButtonSecondary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="cursor-pointer mr-2 rounded-2xl border cursor-p border-white hover:border-[var(--dark-brand-600)] transition-colors ease-in-out duration-300 px-4 py-1 ">
      {children}
    </button>
  );
}

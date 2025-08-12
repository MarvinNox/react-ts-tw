export default function ButtonPrime({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="cursor-pointer mr-2 rounded-2xl bg-[var(--dark-brand-700)] hover:bg-[var(--dark-brand-600)] transition-colors ease-in-out duration-300 px-4 py-1 text-white">
      {children}
    </button>
  );
}

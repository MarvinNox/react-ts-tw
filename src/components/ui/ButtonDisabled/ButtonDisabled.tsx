export default function ButtonDisabled({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      disabled
      className="cursor-not-allowed mr-2 rounded-2xl disabled:bg-red-400 cursor-p  transition-colors ease-in-out duration-300 px-4 py-1"
    >
      {children}
    </button>
  );
}

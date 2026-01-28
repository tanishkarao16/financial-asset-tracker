export default function Card({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="rounded-xl bg-zinc-900/60 border border-zinc-800 p-6 backdrop-blur">
        <h3 className="text-sm text-zinc-400 mb-2">{title}</h3>
        {children}
      </div>
    );
  }
  
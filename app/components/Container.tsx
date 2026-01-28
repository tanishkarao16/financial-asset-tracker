export default function Container({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main className="flex-1 bg-zinc-950 text-white">
        {children}
      </main>
    );
  }
  
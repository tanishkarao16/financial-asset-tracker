export default function Card({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 
                hover:border-zinc-700 hover:shadow-lg 
                transition-all duration-200">
        <h3 className="text-sm text-zinc-400 mb-2">{title}</h3>
        {children}
      </div>
    );
  }
  
export function Section({ children, bgColor, id, className }: {
  children: React.ReactNode;
  bgColor: string;
  id: string;
  className?: string;
}) {
  return (
    <section id={id} className={`min-h-[85vh] flex items-center justify-center ${bgColor} relative ${className ?? ''}`}>
      {children}
    </section>
  );
}

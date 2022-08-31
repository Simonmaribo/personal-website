export default function Section({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle: string }) {
  return (
    <div>
        <h2 className="text-grey-900 text-[20px] font-bold">{title}</h2>
        <p className="text-grey-800">{subtitle}</p>
        {children}
    </div>
  )
}

export default function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <a href={href} target="_blank" className="transition text-grey-800 hover:text-blue-600" rel="noreferrer">
            {icon}
        </a>
    )
}
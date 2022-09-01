import Link from "next/link";
import React from "react";

const Links = [
    {
        label: "Projekter",
        to: "/projects"
    },
    {
        label: "Mine repos",
        to: "/repos"
    },
    {
        label: "Om mig",
        to: "/about"
    }
]

export default function Navbar(){

    const [showMobile, setShowMobile] = React.useState(false);

    return (
        <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between border-b py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                            <h1 className="text-grey-900 text-[20px] font-bold cursor-pointer">Simon Maribo</h1>
                        </Link>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <button type="button" onClick={() => setShowMobile(true)} className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-slate-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0050ff]" aria-expanded="false">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden space-x-10 md:flex">
                        {
                            Links.map(({ label, to }, index) => (
                                <Link key={index} href={to}>
                                    <h1 className="text-base font-medium text-gray-900 hover:text-[#0050ff] transition-colors cursor-pointer">{label}</h1>
                                </Link>
                            ))
                        }
                    </nav>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <a href="mailto:simonmaribo@outlook.dk" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#0050ff] px-4 py-2 text-base font-medium text-white shadow-sm hover:opacity-95">Kontakt mig</a>
                    </div>
                </div>
            </div>

            { showMobile && (
                <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 py-2">
                            <div className="flex items-center justify-between">
                                <Link href="/">
                                    <h1 className="text-grey-900 text-[20px] font-bold cursor-pointer">Simon Maribo</h1>
                                </Link>
                                <div className="-mr-2">
                                    <button type="button" onClick={() => setShowMobile(false)} className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-slate-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0050ff]">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                {
                                    Links.map(({ label, to }, index) => (
                                        <Link key={index} href={to}>
                                            <h1 className="text-base font-medium rounded-lg py-2 px-4 text-gray-900 transition-colors hover:text-[#0050ff] hover:bg-gray-50 cursor-pointer">{label}</h1>
                                        </Link>
                                    ))
                                }
                            </div>
                            <div>
                                <a href="mailto:simonmaribo@outlook.dk" className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#0050ff] px-4 py-2 text-base font-medium text-white shadow-sm hover:opacity-95">Kontakt mig</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
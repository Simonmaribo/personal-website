import { FiGithub } from 'react-icons/fi';
import { VscRepoForked } from 'react-icons/vsc';
import { AiOutlineStar } from 'react-icons/ai';
import LanguageBadge from './LanguageBadge';
import Repo from '../interfaces/github/Repo';


const SkeletonRepository = () => {
    return (
        <div className="cursor-pointer transition border border-1 border-gray-100 rounded-[0.75rem] py-3 px-4 animate-pulse">
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row leading-none gap-2 text-sm">
                        <FiGithub/>
                        <p className="h-3 bg-slate-100 rounded-full w-32 mb-4"></p>
                    </div>
                    <div className="flex flex-row gap-1">
                        <div className="flex flex-row leading-none gap-1">
                            <VscRepoForked/>
                            <p className="h-2 bg-slate-100 rounded-full  max-w-[360px]"></p>
                        </div>
                        <div className="flex flex-row leading-none gap-1">
                            <AiOutlineStar/>
                            <p className="h-2 bg-slate-100 rounded-full max-w-[360px]"></p>
                        </div>
                    </div>
                </div>
                <p className="h-2 bg-slate-100 rounded-full max-w-[360px] mt-2"></p>
                <p className="h-2 bg-slate-100 rounded-full max-w-[360px]"></p>
                <p className="h-2 bg-slate-100 rounded-full max-w-[320px]"></p>
            </div>
        </div> 
    )
}


export default function Repository({ repository }: { repository?: Repo}){
    if(!repository) return <SkeletonRepository/>
    return (
        <a href={repository.html_url} target="_blank">
            <div key={repository.id} className="cursor-pointer transition border border-1 border-gray-100 rounded-[0.75rem] py-2 px-4 hover:bg-slate-50">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row leading-none gap-2 text-sm">
                            <FiGithub/>
                            <p className="text-grey-800 font-medium">{repository.name}</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <div className="flex flex-row leading-none gap-1">
                                <VscRepoForked/>
                                <p>{repository.forks_count}</p>
                            </div>
                            <div className="flex flex-row leading-none gap-1">
                                <AiOutlineStar/>
                                <p>{repository.stargazers_count}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <LanguageBadge type={repository.language}/>
                    </div>
                    <p className="text-[0.875rem] text-grey-500">{repository.description || "No description"}</p>
                </div>
            </div>
        </a>
    )
}
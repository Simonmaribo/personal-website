import Repo from "../interfaces/github/Repo";
import Repository from "./Repository";

export default function RepoList({repos}: {repos?: Repo[] | undefined}) {
    if(!repos || typeof repos == undefined) return <>{[...Array(5)].map((value, index) => <Repository key={index}/>)}</>

    repos.sort((a: Repo, b: Repo) => {
        if(a.stargazers_count > b.stargazers_count)
            return -1;
        else if(a.stargazers_count < b.stargazers_count)
            return 1;
        return 0;
    })

    return (
        <>{ repos?.map((value, index) => <Repository repository={value} key={index}/>) }</>
    )
}
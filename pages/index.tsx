import { useQuery } from 'react-query';
import getRepos from '../api/github/getRepos';
import Header from '../components/Header';
import RepoList from '../components/RepoList';
import Section from '../components/Section';

export default function Index(){
  
  // https://sebazz.me/

  const { isLoading, isError, data } = useQuery('repos', getRepos)
  return (
    <div className="container mx-auto px-4 sm:px-10 md:px-32 lg:px-52 xl:px-72 my-10">
      <Header/>
      <Section title="Mine Repos " subtitle="Dette er en liste over mine repos sorteret efter stjerner.">
        <div className="mt-2 flex flex-col gap-2">
          <RepoList repos={data}/>
        </div>
      </Section>
    </div>
  )
}

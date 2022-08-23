import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Import React-Query
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})


// Import DayJS plugin
import dayjs from 'dayjs';
import Meta from '../components/Meta';
require('dayjs/locale/en')

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
dayjs.locale('en')

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Meta/>
      <Component {...pageProps} />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App

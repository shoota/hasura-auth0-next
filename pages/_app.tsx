import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"

// client side query client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp

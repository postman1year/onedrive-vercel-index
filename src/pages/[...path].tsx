import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import siteConfig from '../../config/site.config'
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false })
const FileListing = dynamic(() => import('../components/FileListing'), { ssr: false })
const Footer = dynamic(() => import('../components/Footer'), { ssr: false })
const Breadcrumb = dynamic(() => import('../components/Breadcrumb'), { ssr: false })
const SwitchLayout = dynamic(() => import('../components/SwitchLayout'), { ssr: false })

export default function Folders() {
  const { query } = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      <main className="flex w-full flex-1 flex-col bg-gray-50 dark:bg-gray-800">
        <Navbar />
        <div className="mx-auto w-full max-w-5xl py-4 sm:p-4">
          <nav className="mb-4 flex items-center justify-between space-x-3 px-4 sm:px-0 sm:pl-1">
            <Breadcrumb query={query} />
            <SwitchLayout />
          </nav>
          <FileListing query={query} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

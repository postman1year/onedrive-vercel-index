import { siteConfig } from '../../config/site.config.js'

const createFooterMarkup = () => {
  return {
    __html: siteConfig.footer
  }
}

const Footer = () => {
  return (
    <div
      className="w-full border-t border-gray-900/10 p-4 text-center text-xs font-medium text-gray-400 dark:border-gray-500/30"
      dangerouslySetInnerHTML={createFooterMarkup()}
    ></div>
  )
}

export default Footer

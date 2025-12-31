import type { NextApiResponse } from 'next'
import * as apiConfig from '../../../config/api.config.js'
import * as siteConfig from '../../../config/site.config.js'

export default function handler(res: NextApiResponse) {
  res.status(200).json({
    clientId: apiConfig.default,
    clientSecret: apiConfig.obfuscatedClientSecret,
    userPrincipalName: siteConfig.default,
    baseDirectory: siteConfig.baseDirectory
  })
}

import type { NextApiRequest, NextApiResponse } from 'next'
import { apiConfig } from '../../../config/api.config.js'
import { siteConfig } from '../../../config/site.config.js'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    clientId: apiConfig.default,
    clientSecret: apiConfig.obfuscatedClientSecret,
    userPrincipalName: siteConfig.default,
    baseDirectory: siteConfig.baseDirectory
  })
}

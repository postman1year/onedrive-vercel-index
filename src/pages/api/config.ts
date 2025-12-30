import type { NextApiRequest, NextApiResponse } from 'next'
import * as apiConfig from '../../../config/api.config.js'
import * as siteConfig from '../../../config/site.config.js'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    clientId: apiConfig.clientId,
    clientSecret: apiConfig.obfuscatedClientSecret,
    userPrincipalName: siteConfig.userPrincipalName,
    baseDirectory: siteConfig.baseDirectory
  })
}

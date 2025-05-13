import type { NextApiRequest, NextApiResponse } from 'next'
import apiConfig from '../../../config/api.config'
import siteConfig from '../../../config/site.config'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    clientId: apiConfig.clientId,
    clientSecret: apiConfig.obfuscatedClientSecret,
    userPrincipalName: siteConfig.userPrincipalName,
    baseDirectory: siteConfig.baseDirectory
  })
}

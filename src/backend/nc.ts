import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import { onError } from './errors'
import cors from 'cors'

export const ncBase = () =>
    nc<NextApiRequest, NextApiResponse>({
        onNoMatch: (_req, res) =>
            res.status(405).json({ error: 'Method Not Allowed' }),
        onError,
    }).use(cors())

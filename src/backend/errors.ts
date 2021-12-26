import type { NextApiRequest, NextApiResponse } from 'next'

export const error = {
    MissingKey: class MissingKey extends Error {},
    LinkNotFound: class UserNotFound extends Error {},
    ValidationError: class ValidationError extends Error {},
    CustomLinkIDAlreadyExists: class CustomLinkIDAlreadyExists extends Error {},
}

export function onError(
    err: Error,
    _req: NextApiRequest,
    res: NextApiResponse,
    _next: any
) {
    console.error(err)

    if (err instanceof error.MissingKey) {
        res.status(422).json({ error: err.message })
    } else if (err instanceof error.LinkNotFound) {
        res.status(404).json({ error: err.message })
    } else if (err instanceof error.ValidationError) {
        res.status(403).send('Invalid Authorization')
    } else if (err instanceof error.CustomLinkIDAlreadyExists) {
        res.status(409).json({ error: err.message })
    } else {
        res.status(500).json({ error: err.message })
    }
}

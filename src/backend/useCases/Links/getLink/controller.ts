import { NextApiRequest, NextApiResponse } from 'next'
import { validateData } from '../../../utils'
import { TGetLinkResponseDTO } from './ResponseDTO'
import { getLinkSchema } from './Schema'
import { GetLinkUseCase } from './useCase'

export class GetLinkController {
    constructor(private readonly getLinkUseCase: GetLinkUseCase) {}

    async do(req: NextApiRequest, res: NextApiResponse<TGetLinkResponseDTO>) {
        const { id } = validateData(getLinkSchema, req.query)
        
        const link = await this.getLinkUseCase.do({ id })

        res.redirect(301, link.to)
    }
}

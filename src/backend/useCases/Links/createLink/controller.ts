import { NextApiRequest, NextApiResponse } from 'next'
import { validateData } from '../../../utils'
import { TCreateLinkResponseDTO } from './ResponseDTO'
import { CreateLinkchema } from './Schema'
import { CreateLinkUseCase } from './useCase'

export class CreateLinkController {
    constructor(private readonly createLinkUseCase: CreateLinkUseCase) {}

    async do(
        req: NextApiRequest,
        res: NextApiResponse<TCreateLinkResponseDTO>
    ) {
        const { to, id } = validateData(CreateLinkchema, req.body)

        res.status(201).json(await this.createLinkUseCase.do({ to, id }))
    }
}

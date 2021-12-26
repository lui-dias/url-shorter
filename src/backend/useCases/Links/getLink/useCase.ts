import { error } from '../../../errors'
import { UseCaseBase } from '../UseCaseBase'
import { TGetLinkDTO } from './DTO'
import { TGetLinkResponseDTO } from './ResponseDTO'

export class GetLinkUseCase extends UseCaseBase<
    TGetLinkDTO,
    TGetLinkResponseDTO
> {
    async do({ id }: TGetLinkDTO) {
        const link = await this.findById(id)

        if (!link) {
            throw new error.LinkNotFound('Link not found')
        }

        return { to: link.to }
    }
}

import { Link } from '../../../entities/Link'
import { UseCaseBase } from '../UseCaseBase'
import { TCreateLinkDTO } from './DTO'
import { TCreateLinkResponseDTO } from './ResponseDTO'
import { error } from '../../../errors'

export class CreateLinkUseCase extends UseCaseBase<
    TCreateLinkDTO,
    TCreateLinkResponseDTO
> {
    // prettier-ignore
    async do({ to, id }: TCreateLinkDTO) {
        while (true) {
            try {
                const link = new Link(to, id)
                await this.create(link)
                return { id: link.id }
                
            } catch (err: any) {
                const IDAlreadyExists = err.message === 'P2002'

                if (id) {
                    throw new error.CustomLinkIDAlreadyExists('There is already a link with this name')
                }

                if (!IDAlreadyExists) {
                    throw err
                }
            }
        }
    }
}

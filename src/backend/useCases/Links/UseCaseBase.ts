import { Link } from '../../entities/Link'
import { TLinkRepository } from '../../repositories/TLinkRepository'

export abstract class UseCaseBase<DTO, ResponseDTO> {
    constructor(private readonly LinkRepository: TLinkRepository) {}

    async create(Link: Link): Promise<Link> {
        return this.LinkRepository.create(Link)
    }

    async findById(id: string): Promise<Link | null> {
        return this.LinkRepository.findById(id)
    }

    async getAllLinksIDS(): Promise<string[]> {
        return this.LinkRepository.getAllLinksIDS()
    }

    abstract do(data: DTO): Promise<ResponseDTO>
}

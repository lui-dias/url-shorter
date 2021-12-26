import { TLinkRepository } from '../TLinkRepository'
import { prisma } from '../../database'
import { Link } from '../../entities/Link'

export class PrismaLinkRepository implements TLinkRepository {
    async create(link: Link) {
        return await prisma.link.create({
            data: {
                id: link.id,
                to: link.to,
                numberOfClicks: link.numberOfClicks,
            },
        })
    }

    async findById(id: string) {
        return await prisma.link.findFirst({
            where: { id },
        })
    }

    async getAllLinksIDS() {
        const links = await prisma.link.findMany()
        return links.map(link => link.id)
    }
}

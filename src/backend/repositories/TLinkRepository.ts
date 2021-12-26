import { Link } from '../entities/Link'

export type TLinkRepository = {
    create: (link: Link) => Promise<Link>
    findById: (id: string) => Promise<Link | null>
    getAllLinksIDS: () => Promise<string[]>
}
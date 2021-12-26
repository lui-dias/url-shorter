import { PrismaLinkRepository } from '../../../repositories/implementions/PrismaLinkRepository'
import { GetLinkController } from './controller'
import { GetLinkUseCase } from './useCase'

const getLinkUserCase = new GetLinkUseCase(new PrismaLinkRepository())

export const getLinkController = new GetLinkController(getLinkUserCase)

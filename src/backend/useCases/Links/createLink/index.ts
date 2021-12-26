import { PrismaLinkRepository } from '../../../repositories/implementions/PrismaLinkRepository'
import { CreateLinkController } from './controller'
import { CreateLinkUseCase } from './useCase'

const createLinkUseCase = new CreateLinkUseCase(new PrismaLinkRepository())

export const createLinkController = new CreateLinkController(createLinkUseCase)

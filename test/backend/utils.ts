import { prisma } from '../../src/backend/database'
import axios from 'axios'

export const API = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export function truncate() {
    return prisma.link.deleteMany({})
}

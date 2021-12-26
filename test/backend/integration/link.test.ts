import { prisma } from '../../../src/backend/database'
import { API, truncate } from '../utils'

describe('Link operations', () => {
    beforeEach(async () => await truncate())

    it('Create a link', async () => {
        const r = await API.post('/link', { to: 'https://www.google.com'})
        
        expect(r.status).toBe(201)
    })
    
    it('Should not create a link, ID already exists', async () => {
        await API.post('/link', { to: 'https://www.google.com', id: 'test' })

        await expect(API.post('/link', { to: 'https://www.google.com', id: 'test' })).rejects.toThrow(
            expect.objectContaining({
                response: expect.objectContaining({
                    status: 409,
                }),
            }),
        )
    })

    it('Must access the created link', async () => {
        
    })
})
import { customAlphabet } from 'nanoid'

export class Link {
    public readonly id: string

    public readonly to: string
    public numberOfClicks: number

    // prettier-ignore
    constructor(to: string, id?: string) {
        /* 
            Check if the risk of collision is low
            
            https://zelark.github.io/nano-id-cc/
        */

        this.id = id || customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 10)()
        this.to = to
        this.numberOfClicks = 0
    }
}

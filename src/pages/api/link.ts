import { ncBase } from '../../backend/nc'
import { createLinkController } from '../../backend/useCases/Links/createLink'

export default ncBase()
    .post(async (req, res) => await createLinkController.do(req, res))

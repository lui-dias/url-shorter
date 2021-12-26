import { ncBase } from '../../backend/nc'
import { getLinkController } from '../../backend/useCases/Links/getLink'

export default ncBase()
    .get(async (req, res) => await getLinkController.do(req, res))

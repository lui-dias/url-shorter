import { JSONSchemaType } from 'ajv'
import { TGetLinkDTO } from './DTO'

export const getLinkSchema: JSONSchemaType<TGetLinkDTO> = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
        },
    },
    required: ['id'],
    additionalProperties: false,
}

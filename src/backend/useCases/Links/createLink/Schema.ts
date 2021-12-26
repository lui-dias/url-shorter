import { JSONSchemaType } from 'ajv'
import { TCreateLinkDTO } from './DTO'

export const CreateLinkchema: JSONSchemaType<TCreateLinkDTO> = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            nullable: true,
        },
        to: {
            type: 'string',
        },
    },
    required: ['to'],
    additionalProperties: false,
}

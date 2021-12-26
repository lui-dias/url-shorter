import Ajv, { JSONSchemaType } from 'ajv'
import { error } from './errors'

export function validateData<SchemaType>(schema: JSONSchemaType<SchemaType>, data: any): SchemaType {
    const ajv = new Ajv()

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    if (!isValid) {
        throw new error.ValidationError(validate.errors![0].message)
    }

    return data
}

export type AllProps<T> = Omit<T, ''>
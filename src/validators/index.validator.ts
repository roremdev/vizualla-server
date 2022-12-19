import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common'
import { Schema } from 'zod'

import {
    createPublishSchema,
    editPublishSchema,
} from '@validators/publish.validator'

@Injectable()
export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: Schema) {}

    transform(value: any) {
        const { success } = this.schema.safeParse(value)
        if (!success) throw new BadRequestException('Validation failed')
        return value
    }
}

export { createPublishSchema, editPublishSchema }

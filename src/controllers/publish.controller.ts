import { Controller, Post, Body, UsePipes } from '@nestjs/common'
import { z } from 'zod'

import {
    ZodValidationPipe,
    createPublishSchema,
} from '@validators/index.validator'

@Controller('post')
export class PublishController {
    /**
     * @description Create a new post.
     * @return Post */
    @Post()
    @UsePipes(new ZodValidationPipe(createPublishSchema))
    postPublish(@Body() publish: z.infer<typeof createPublishSchema>) {
        console.log(publish)
    }
}

import {
    Controller,
    Post,
    Patch,
    Delete,
    Param,
    Body,
    UsePipes,
    ParseIntPipe,
    HttpCode,
} from '@nestjs/common'
import { z } from 'zod'

import {
    ZodValidationPipe,
    createPublishSchema,
    editPublishSchema,
} from '@validators/index.validator'

@Controller('post')
export class PublishController {
    /**
     * @description Create a new post. */
    @Post()
    @UsePipes(new ZodValidationPipe(createPublishSchema))
    postPublish(@Body() publish: z.infer<typeof createPublishSchema>) {
        console.log(publish)
    }

    /**
     * @description Edit a post. */
    @Patch(':id')
    @HttpCode(204)
    @UsePipes(new ZodValidationPipe(editPublishSchema))
    patchPublish(
        @Param('id', ParseIntPipe) id: number,
        @Body() publish: z.infer<typeof createPublishSchema>,
    ) {
        console.log(publish)
    }

    /**
     * @description Remove a post. */
    @Delete(':id')
    deletePublish(@Param('id', ParseIntPipe) id: number) {}
}

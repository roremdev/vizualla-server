import { Module } from '@nestjs/common'

import { PublishController } from '@controllers/publish.controller'

@Module({
    controllers: [PublishController],
})
export class PublishModule {}

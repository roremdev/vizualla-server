import { Module } from '@nestjs/common'

import { IndexController } from '@controllers/index.controller'

import { AccountModule } from '@modules/account.module'
import { PublishModule } from '@modules/publish.module'

import { IndexService } from '@services/index.service'

@Module({
    imports: [AccountModule, PublishModule],
    controllers: [IndexController],
    providers: [IndexService],
})
export class ServerModule {}

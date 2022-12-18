import { Module } from '@nestjs/common'

import { IndexController } from '@controllers/index.controller'
import { AccountsController } from '@controllers/accounts.controller'
import { AccountController } from '@controllers/account.controller'

import { IndexService } from '@services/index.service'
import { AccountService } from '@services/account.service'

@Module({
    imports: [],
    controllers: [IndexController, AccountsController, AccountController],
    providers: [IndexService, AccountService],
})
export class ServerModule {}

import { Module } from '@nestjs/common'

import { AccountsController } from '@controllers/accounts.controller'
import { AccountController } from '@controllers/account.controller'

import { AccountService } from '@services/account.service'

@Module({
    controllers: [AccountsController, AccountController],
    providers: [AccountService],
})
export class AccountModule {}

import { Controller, Get, Query } from '@nestjs/common'
import { AccountService } from '@services/account.service'
import { Account } from '@entities/account.entity'

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountService: AccountService) {}

    /**
     * @description Find all accounts registered.
     * @param {number} offset - Number of accounts to skip.
     * @param {number} limit - Number of accounts to take.
     * @return Account[] */
    @Get()
    getAccounts(
        @Query('offset') offset = 0,
        @Query('limit') limit = 10
    ): Account[] {
        return this.accountService.findAccounts()
    }
}

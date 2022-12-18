import { Controller, Get } from '@nestjs/common'
import { AccountService } from '@services/account.service'

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountService: AccountService) {}

    /**
     * @description Find all accounts registered.
     * @return Account[] */
    @Get()
    getAccounts() {
        return this.accountService.findAccounts()
    }
}

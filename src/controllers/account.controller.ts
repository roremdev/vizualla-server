import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    NotFoundException,
} from '@nestjs/common'

import { AccountService } from '@services/account.service'
import { Account } from '@entities/account.entity'

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    /**
     * @description Find an account registered by query if exists.
     * @throws NotFoundException - Account isn't found.
     * @return Account */
    @Get(':id')
    getAccount(@Param('id', ParseIntPipe) id: number): Account {
        const account = this.accountService.findAccount(id)
        if (!account) throw new NotFoundException('Account is not found')
        return account
    }
}

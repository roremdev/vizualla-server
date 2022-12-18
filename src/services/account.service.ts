import { Injectable } from '@nestjs/common'
import Accounts from '@db/mocks/account.mock'
import { Account } from '@entities/account.entity'

@Injectable()
export class AccountService {
    /**
     * @description Find all accounts registered.
     * @return Account[] */
    findAccounts(): Account[] {
        return Accounts
    }

    /**
     * @description Find an account registered by query if exists.
     * @param {number} id - Account id.
     * @return Account | undefined */
    findAccount(id: number): Account | undefined {
        return Accounts.find((account) => account.id === id)
    }
}

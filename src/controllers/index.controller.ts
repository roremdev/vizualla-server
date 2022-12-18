import { Controller, Get } from '@nestjs/common'
import { VERSION, MODE } from '@config/env'

@Controller()
export class IndexController {
    @Get()
    info() {
        return {
            project: '⬢ Vizualla',
            mode: MODE,
            version: VERSION,
        }
    }
}

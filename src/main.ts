import 'module-alias/register'
import { NestFactory } from '@nestjs/core'
import { ServerModule } from '@modules/server.module'
;(async () => {
    const app = await NestFactory.create(ServerModule)
    await app.listen(3000)
})()

import 'module-alias/register'
import { NestFactory } from '@nestjs/core'
import { AppModule } from '@modules/app.module'
;(async () => {
    const app = await NestFactory.create(AppModule)
    await app.listen(3000)
})()

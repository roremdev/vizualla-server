import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import { version } from '@/package.json'

const env = dotenv.config()
dotenvExpand.expand(env)

export const VERSION = version
export const MODE = process.env.MODE || 'local'

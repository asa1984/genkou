import z from 'zod'

function createEnv() {
  const envSchema = z.object({
    SUPABASE_URL: z.string().url(),
    SUPABASE_ANON_KEY: z.string(),
    APP_URL: z.string().url().optional().default('http://localhost:5173'),
  })

  const envVars = Object.entries(import.meta.env).reduce<Record<string, string>>((acc, curr) => {
    const [key, value] = curr
    if (key.startsWith('VITE_')) {
      acc[key.replace('VITE_', '')] = value
    }
    return acc
  }, {})

  const parsedEnv = envSchema.safeParse(envVars)

  if (!parsedEnv.success) {
    throw new Error(`環境変数が不正です: 
${parsedEnv.error}
`)
  }

  return parsedEnv.data
}

export const env = createEnv()

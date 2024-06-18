import { PasswordGenerator } from '@/components/password'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-3xl font-bold">Gerador de Senha</h1>
        <span className="text-zinc-400">
          Clique em gerar para gerar uma senha
        </span>
      </div>

      <div className="mt-44 flex flex-col gap-10 w-[24rem]">
        <PasswordGenerator />
      </div>
    </div>
  )
}

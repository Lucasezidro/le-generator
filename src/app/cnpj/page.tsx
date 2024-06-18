import { CnpjGenerator } from '@/components/cnpj'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-3xl font-bold">Gerador de CNPJ</h1>
        <span className="text-zinc-400">
          Clique em gerar para gerar um CNPJ para testes
        </span>
      </div>

      <div className="mt-44 flex flex-col gap-10 w-[24rem]">
        <CnpjGenerator />
      </div>
    </div>
  )
}

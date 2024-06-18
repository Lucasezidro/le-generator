'use client'

import { Copy } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function CnpjGenerator() {
  const [documentNumber, setDocumentNumber] = useState('')

  function generateRandomCNPJ() {
    const randomNumber = () => Math.floor(Math.random() * 10)
    const digits = Array.from({ length: 14 }, randomNumber)

    if (digits.length < 14) {
      toast.error('Formato de CNPJ invalido.')
      throw new Error('Invalid document number format.')
    }

    const partialCnpj = digits.join('')
    const formattedCnpj = `${partialCnpj.slice(0, 2)}.${partialCnpj.slice(2, 5)}.${partialCnpj.slice(5, 8)}/${partialCnpj.slice(8, 12)}-${partialCnpj.slice(12, 14)}`
    return formattedCnpj
  }

  function handleGenerateCnpj() {
    const generatedCnpj = generateRandomCNPJ()
    setDocumentNumber(generatedCnpj)

    toast.success('CNPJ gerado com sucesso!')
  }

  async function handleCopyClick() {
    if (documentNumber === '') {
      toast.error('Gere uma senha para que possa copiá-la')
      return
    }

    await navigator.clipboard.writeText(documentNumber)

    toast.success('Senha copiada com sucesso!')
  }

  return (
    <>
      <div className="flex justify-between px-5 py-4 rounded bg-transparent outline-none border border-zinc-400 placeholder:text-zinc-400 shadow-lg">
        <input
          type="text"
          value={documentNumber}
          className="bg-transparent border-0 outline-none"
          placeholder="Novo CNPJ"
        />

        <div className="space-x-4">
          <button className="group" onClick={handleCopyClick}>
            <Copy className="text-zinc-400 group-hover:text-teal-500" />
          </button>
        </div>
      </div>
      <button
        data-testId="button-generate-password"
        onClick={handleGenerateCnpj}
        className="bg-teal-500 p-4 rounded-full text-teal-950 font-bold hover:bg-teal-600"
      >
        Gerar novo CNPJ
      </button>
    </>
  )
}

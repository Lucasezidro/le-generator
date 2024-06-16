'use client'

import { Copy, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function PasswordGenerator() {
  const [generetePassword, setGeneratePassword] = useState('')
  const [inputType, setInputType] = useState(false)

  function generatePassword() {
    const passwordFormat = /^[A-Za-z0-9!@#$%&*()_+.]+$/
    let result = ''
    const charactersLength = passwordFormat.toString().length
    const passwordSize = 16

    for (let i = 0; i < passwordSize; i++) {
      result += passwordFormat
        .toString()
        .charAt(Math.floor(Math.random() * charactersLength))
    }

    setGeneratePassword(result)

    return result
  }

  async function handleCopyClick() {
    if (generetePassword === '') {
      toast.error('Gere uma senha para que possa copiá-la')
      return
    }

    await navigator.clipboard.writeText(generetePassword)

    toast.success('Senha copiada com sucesso!')
  }

  function handleGenerateNewPassword() {
    generatePassword()

    toast.success('Senha gerada com sucesso!')
  }

  return (
    <>
      <div className="flex justify-between px-5 py-4 rounded bg-transparent outline-none border border-zinc-400 placeholder:text-zinc-400 shadow-lg">
        <input
          type={inputType ? 'text' : 'password'}
          value={generetePassword}
          className="bg-transparent border-0 outline-none"
          placeholder="Nova senha"
        />

        <div className="space-x-4">
          <button className="group" onClick={handleCopyClick}>
            <Copy className="text-zinc-400 group-hover:text-teal-500" />
          </button>

          <button
            className="group"
            onClick={() => setInputType((prev) => !prev)}
          >
            {inputType ? (
              <Eye className="text-zinc-400 group-hover:text-teal-500" />
            ) : (
              <EyeOff className="text-zinc-400 group-hover:text-teal-500" />
            )}
          </button>
        </div>
      </div>
      <button
        data-testId="button-generate-password"
        onClick={handleGenerateNewPassword}
        className="bg-teal-500 p-4 rounded-full text-teal-950 font-bold hover:bg-teal-600"
      >
        Gerar nova senha
      </button>
    </>
  )
}

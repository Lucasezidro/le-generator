interface TabItem {
  title: string
  value: string
  isSelected: boolean
  href: string
}

export const tabItem: TabItem[] = [
  {
    title: 'Gerar Senha',
    value: '/',
    isSelected: false,
    href: '/',
  },
  {
    title: 'Gerar CNPJ',
    value: '/cnpj',
    isSelected: false,
    href: '/cnpj',
  },
  {
    title: 'Gerar CPF',
    value: '/cpf',
    isSelected: false,
    href: '/cpf',
  },
  {
    title: 'Gerar Cartão de crédito/débito',
    value: '/cartao',
    isSelected: false,
    href: '/cartao',
  },
]

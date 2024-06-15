'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './tab-item'
import { usePathname } from 'next/navigation'
import { tabItem } from '@/helpers/tab-item'

export function Menu() {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState(pathname)

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 mb-6 flex w-full items-center gap-4 border-b border-zinc-400">
        {tabItem.map((item) => {
          return (
            <a href={item.href} key={item.value}>
              <TabItem
                title={item.title}
                value={item.value}
                isSelected={pathname === item.href}
              />
            </a>
          )
        })}
      </Tabs.List>
    </Tabs.Root>
  )
}

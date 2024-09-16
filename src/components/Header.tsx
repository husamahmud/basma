'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const articels: { title: string; href: string }[] = [
  {
    title: 'للشباب',
    href: '/docs/primitives/alert-dialog',
  },
  {
    title: 'تربية الأبناء',
    href: '/docs/primitives/hover-card',
  },
  {
    title: 'أزواج وزوجات',
    href: '/docs/primitives/progress',
  },
]

const ask: { title: string; href: string }[] = [
  {
    title: 'استشارات',
    href: '/docs/primitives/alert-dialog',
  },
  {
    title: 'فتاوى',
    href: '/docs/primitives/hover-card',
  },
]

export function Header() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row-reverse gap-2">
        {/** اسرية **/}
        <NavigationMenuItem className="flex items-center">
          <Link
            href="/family"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} px-4`}>
              اسرية
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/** تدوينات **/}
        <NavigationMenuItem className="flex items-center">
          <Link
            href="/tadwinat"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} px-4`}>
              تدوينات
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/** المراة **/}
        <NavigationMenuItem className="flex items-center">
          <Link
            href="/woman"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} px-4`}>
              المرأة
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/** فيديوهات **/}
        <NavigationMenuItem className="flex items-center">
          <Link
            href="/videos"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} px-4`}>
              فيديوهات
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/** اسال **/}
        <NavigationMenuItem className="flex items-center">
          <NavigationMenuTrigger
            className={`${navigationMenuTriggerStyle()} data-[state=open]:bg-accent px-4`}
          >
            اسال
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[150px] grid-cols-1 gap-2 p-2">
              {ask.map(component => (
                <ListItem
                  className="text-center hover:bg-gray-200"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/** مقالات **/}
        <NavigationMenuItem className="flex items-center">
          <NavigationMenuTrigger
            className={`${navigationMenuTriggerStyle()} data-[state=open]:bg-accent px-4`}
          >
            مقالات
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[150px] grid-cols-1 gap-2 p-2">
              {articels.map(component => (
                <ListItem
                  className="text-center hover:bg-gray-200"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'

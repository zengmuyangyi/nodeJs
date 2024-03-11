import cn from './locale/cn.js'
import en from './locale/en.js'
import { useApp } from '@/stores/index.js'

export default function $t(name) {
  if (!name) return ''
  const { language } = useApp()

  const items = language === 'cn' ? cn : en

  return items[name] || name
}

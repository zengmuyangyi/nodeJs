import mitt from 'mitt'
import { useApp } from '@/stores'
export const emitter = mitt()
// 多语言文本
export function getImage(imgObj) {
  if (!imgObj) return ''
  const { language } = useApp()
  return imgObj[language] || imgObj.cn
}

// 多语言文本
export function getText(strObj) {
  if (!strObj) return ''
  const { language } = useApp()
  return strObj[language] || strObj.cn
}

// 处理后台返回的多语言json字符串数据
export function parseObject(data) {
  const keys = Object.keys(data)

  keys.forEach((key) => {
    if (isJSON(data[key])) {
      data[key] = JSON.parse(data[key])
    }
  })

  if (data.tags) {
    data.tags = data.tags.split(',')
  } else if (data.tags === '') {
    data.tags = []
  }
}

export function parseImage(data) {
  const keys = Object.keys(data)
  keys.forEach((key) => {
    data[key] = data[key].split(',')
  })
}

export function isJSON(str) {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

export function randomPic(arr, num) {
  const temp = JSON.parse(JSON.stringify(arr))
  if (temp.length > num) {
    const newArr = []
    for (let i = 0, j = temp.length; i < num; j--, i++) {
      const index = Math.floor(Math.random() * j)
      newArr.push(temp[index])
      temp.splice(index, 1)
    }
    return newArr
  } else {
    return temp
  }
}
export function getWeek(time) {
  const date = new Date(time)
  const weekDay = [
    {
      cn: '星期天',
      en: 'Sunday',
    },
    {
      cn: '星期一',
      en: 'Monday',
    },
    {
      cn: '星期二',
      en: 'Tuesday',
    },
    {
      cn: '星期三',
      en: 'Wednesday',
    },
    {
      cn: '星期四',
      en: 'Thursday',
    },
    {
      cn: '星期五',
      en: 'Friday',
    },
    {
      cn: '星期六',
      en: 'Saturday',
    },
  ]
  const d = date.getDay()
  return weekDay[d]
}

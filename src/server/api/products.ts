import { Product } from '~/types'

export default defineEventHandler<Product[]>(() => {
  return [
    {
      name: 'SakuMon',
      description: 'サクっと作る・解く Web問題集',
      thumbnail: '/img/demo_sakumon_me.png',
      url: 'https://demo.sakumon.me',
    },
    {
      name: 'Discord Transfer',
      description: 'Discordをもっと便利にする通話転送Bot',
      thumbnail: '/img/discord_transfer.png',
      url: 'https://github.com/suzukey/discord_transfer',
    },
    {
      name: '?????',
      description: 'WebRTCを利用した新しいサービスを制作中...',
    },
    {
      name: 'And More...',
      description: '楽を生み出すアイデアを沢山ストックしています',
    },
  ]
})

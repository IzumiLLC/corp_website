import { Corp } from '~/types'

export default defineEventHandler<Corp>(() => {
  return {
    name: '合同会社いずみ',
    location: '〒444-0946 愛知県岡崎市富永町字番丈目13番地1-301',
    representative: '鈴木 啓護',
    established: '2022/10/11',
    employees: 1,
    updatedAt: '2022/10/11',
  }
})

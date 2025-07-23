import type {ICertificateCardProps} from "../components/CertificateCard.vue";

export const getCertificateList = ():ICertificateCardProps[] => {
  return [
    {
      title: '정보처리산업기사',
      period: [new Date('2022-09-02'), '영구 유효'],
      description: '발급처: 한국산업인력공단'
    },
    {
      title: 'SQLD (SQL 개발자)',
      period: [new Date('2024-12-13'), new Date('2026-12-13')],
      description: '발급처: 한국데이터산업진흥원',
    }
  ]
}
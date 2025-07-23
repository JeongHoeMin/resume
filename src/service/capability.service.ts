import type {ICapabilityCardProps} from "../components/CapabilityCard.vue";

export const getCapabilityList = (): ICapabilityCardProps[] => {
  return [
    {
      title: '개발 환경 고도화',
      body: [
        'Delphi ORM 기획 & 개발',
        '신규 솔루션 개발 및 운영 과정에 Docker 적용',
        'Node 환경 구축을 위해 사내 NPM 레지스토리(Verdaccio) 구축',
        'GitLab 서버 구축',
        '신규 솔루션에 캐싱과 동시성 처리를 위해 Redis 적용'
      ]
    },
    {
      title: '레거시 시스템 리팩토링',
      body: [
        '레거시 솔루션에 Delphi ORM 적용 (DB 프로시저 기반 -> Delphi ORM 기반)',
        '동적 쿼리로 이루어진 DB 프로시저 개선 (DB 동적 쿼리 기반 -> Application 에서 파라미터 결정)'
      ]
    },
    {
      title: '자동화 시스템 구축 & 개발',
      body: [
        '솔루션 배포 과정 자동화 시스템 기획, 개발 및 운영',
        'DB 모니터링 자동화 시스템 (윈도우 알림 / 문자 / 메일 발송 시스템) 개발 및 운영',
      ]
    },
    // {
    //   title: 'Web 개발',
    //   body: [
    //     '메모장 Web 개발 (사용자 개인정보[주민번호, 카드번호, 전화번호] 검출 및 검열)',
    //     '400여개의 온프레미스 서버 정보와 200여개의 센터 정보 관리 프로그램 개발',
    //   ]
    // }
  ]
}
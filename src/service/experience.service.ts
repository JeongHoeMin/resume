import type {IExperienceCardProps} from "../components/ExperienceCard.vue";

export const getExperienceList = (): IExperienceCardProps[] => {
  return [
    {
      title: '한일네트웍스',
      link: 'https://www.hanilnetworks.com/',
      description: 'Delphi & Vue & Nest 풀스택 개발자',
      period: [new Date('2023-11-01'), '현재'],
      summary: '1개의 콜센터 평균 하루 1만 건 콜,\n200여 개의 콜센터에 콜 연동 서비스 제공',
      body: [
        '사내 솔루션 배포 자동화 시스템 도입(기획 & 개발)',
        '사내 콜센터 정보 관리 시스템 도입(기획 & 개발)',
        'MSSQL 성능 튜닝 및 장애 대응(유지보수)',
        'Delphi 기반 개발 환경에 Vue.js & Nest.js 웹 아키텍처 도입',
        '사내 NPM 레지스토리 Verdaccio 구축 및 Vue.js 컴포넌트 라이브러리 배포',
        'Gitlab, Docker, PostgreSQL, Redis 기반 개발/운영 인프라 도입',
        'DDD 아키텍처 도입',
      ]
    }
  ]
}
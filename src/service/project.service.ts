import type {IProjectCardProps} from "../components/ProjectCard.vue";

export const getProjectList = (): IProjectCardProps[] => {
  return [
    {
      title: 'Voice TM (AIA 생명보험)',
      description: '한일네트웍스/R&D/주임',
      period: [new Date('2025-05'), new Date('2025.07')],
      summary: '기존 Voice TM 프로젝트를 AIA 생명보험 맞춤 형으로 커스텀 제공',
      body: [
        'AIA 생명보험 전용 스크립트 재생 화면 개발',
        '동시성 처리와 캐시 사용을 위해 Redis 적용',
        '프로젝트 배포를 위해 Docker와 Nginx 적용',
        'Vue.js, NestJS, PostgreSQL, Redis, Nginx, Docker',
      ]
    },
    {
      title: 'DB Monitoring',
      description: '한일네트웍스/R&D/주임',
      period: [new Date('2025-04'), new Date('2025-04')],
      summary: '서비스 운영 중 데이터 실시간 모니터링을 자동화 하여\n특정 조건에 만족하면 알림을 보내는 서비스',
      body: [
        '프로젝트 기획, MSA 설계, DDD 아키텍처 적용',
        '모니터링 작업 CRUD RestAPI 개발',
        '동적 스케줄러 백엔드 서비스 개발',
        '메일 전송 API 개발',
        '문자 메시지 API 연동 개발',
        'Windows 알림 Application 개발',
        'Nest.js, Delphi, Vue.js, MsSQL, Docker',
      ]
    },
    {
      title: 'Voice TM',
      description: '한일네트웍스/R&D/사원',
      period: [new Date('2024-04'), new Date('2024.10')],
      summary: '콜센터 상담원들의 스크립트를 대신 읽어주는 TTS 서비스',
      body: [
        '스크립트 조합 백엔드 API 개발',
        '순차적 음성데이터 변환 요청 기능 개발',
        '스크립트 재생 기능 개발',
        '스크립트 하이라이트 기능 개발',
        '스크립트 기입 화면 개발',
        'Vue.js, NestJS, PostgreSQL, PM2',
      ]
    },
    {
      title: 'Server Setup',
      description: '한일네트웍스/R&D/사원',
      period: [new Date('2024-03'), new Date('2024.07')],
      summary: '콜센터 솔루션 배포 자동화 시스템',
      body: [
        '프로젝트 기획 및 설계',
        '프로그램 정보 관리 CRUD 백엔드 API 개발',
        '프로그램 정보 관리 화면 개발',
        '콜연동 모듈 기준 배포 템플릿 설정 CRUD 백엔드 API 개발',
        '콜연동 모듈 기준 배포 템플릿 설정 화면 개발',
        '배포 설정 CRUD 백엔드 API 개발',
        '배포 설정 화면 개발',
        '서버용 배포 파일 조합 및 Windows Command Script 자동 생성 기능 개발',
        '사용자 PC 용 배포 파일 자동 생성 및 컴파일 기능 개발(SVN 연동)',
        '솔루션 배포 파일 다운로드 화면 및 백엔드 API 개발',
        '배포 파일 생성 작업 및 다운로드 현황을 실시간으로 확인 할 수 있는 화면 및 백엔드 기능 개발(SSE 사용)',
        'Vue.js, NestJS, Electron, PostgreSQL, SSE, SVN, Inno Setup, Windows Command, PM2',
      ]
    },
    {
      title: 'CTIAgent Middleware',
      description: '한일네트웍스/R&D/사원',
      period: [new Date('2024-03'), new Date('2024.03')],
      summary: '콜센터 상담원들이 업무시 사용하는 아웃/인바운드 콜 연동 모듈 중계 서비스',
      body: [
        'TCP 소켓 통신과 Socket.io 통신을 중계',
        'Node.js, TCP Server, Socket.io Client, PM2',
      ]
    },
    {
      title: 'NTS Manager Util v2',
      description: '한일네트웍스/R&D/사원',
      period: [new Date('2023-12'), new Date('2024.03')],
      summary: '콜센터 운영 관리자가 사용하는 유틸리티 관리 프로그램',
      body: [
        '프로젝트 설계',
        'Delphi ORM 개발',
        '통화이력 RU 화면 및 기능 개발',
        '녹취 재 전송 API 연동',
        'Delphi, MsSQL',
      ]
    },
    {
      title: 'NTS Memo',
      description: '한일네트웍스/R&D/사원',
      period: [new Date('2023-07'), new Date('2023.09')],
      summary: '콜센터 운영 관리자가 사용하는 유틸리티 관리 프로그램',
      body: [
        '메모장 CRUD 백엔드 API 개발',
        '메모장 Editor 화면 개발',
        '백엔드 개인정보(주민번호, 휴대폰 번호, 카드 번호) 검열 기능 개발',
        '기존 솔루션 연동 자동 로그인 기능 개발',
        'Vue.js, NestJS, Delphi, MsSQL, PM2',
      ]
    },
    {
      title: 'Center Admin',
      description: '한일네트웍스/R&D/사원',
      period: [new Date('2023-03'), new Date('2023.07')],
      summary: '콜센터 운영 서버/센터 정보 관리 및 서버 원격 접속 단순화를 목적으로 한 서비스',
      body: [
        '서버/센터 정보 관리 CRUD 백엔드 API 개발',
        '서버/센터 정보 관리 화면 개발',
        '원격 접속 기능 개발 (Windows Registry 응용)',
        'Vue.js, NestJS, Electron, PostgreSQL, PM2',
      ]
    },
    {
      title: 'Tracking Management System',
      description: '한국공학대학교(구 한국산업기술대학교)/Veritas/팀장',
      link: 'https://github.com/KPU-Veritas/Tracking-Management-System',
      period: [new Date('2022-04'), new Date('2022.10')],
      summary: '전염병 확산 방지를 목적으로 한 밀접 접촉자 추적 시스템',
      body: [
        '프로젝트 구상 및 설계',
        'Android 기기 끼리 3m이내 접근 판단 기능 개발(Beacon 기술 응용)',
        '접촉 기록 백엔드 API 개발',
        'FCM 백엔드 서비스 개발',
        'React.js, Spring Boot, Android, Beacon, MySQL, AWS Elastic Beanstalk, AWS RDS, AWS EC2',
      ]
    },
  ]
}
import type {ISkillCardProps} from "../components/SkillCard.vue";

export const getSkillList = (): ISkillCardProps[] => {
  return [
    {
      title: 'Backend',
      body: [
        'NodeJS(TypeScript), Java, Delphi, Python',
        'NestJS, Express.js, Spring Boot, FastAPI',
        'TypeORM, JPA, FireDAC',
        'Junit',
        'Npm, Yarn, Vite, Gradle',
        'TCP, UDP, Websocket, SocketIO, RestAPI(HTTP), SSE, FCM',
        'IntelliJ, Webstorm, Visual Studio Code',
      ]
    },
    {
      title: 'DevOps',
      body: [
        'MsSQL, PostgreSQL, MariaDB, Redis',
        'GitLab Runner (CI/CD), Docker, Inno Setup, NSSM, PM2',
        'Nginx, Tomcat',
        'Windows Server, Rocky Linux',
      ]
    },
    {
      title: 'Frontend',
      body: [
        'Html, Css, Javascript',
        'Vue.js, Electron, Delphi',
        'Npm, Yarn',
        'Webpack, Vite'
      ]
    }
  ]
}
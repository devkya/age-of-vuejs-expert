# (Inflearn) Vue.js 끝장내기

Start date : 2022-09-21
End date : 2022-09-30

## 현대 프런트엔드 개발

요구사항 -> 서비스 기획 -> UI, UX 상세 설계 -> GUI 디자인 -> 퍼블리싱 -> 백엔드 API 개발 -> 프런트엔드 개발 -> QA

## NVM

다양한 버전의 노드를 설치하고 관리할 수 있게 해주는 툴  
협업 또는 다양한 프로젝트를 동시에 진행해야 할 때 버전 호환 문제를 방지함

장점

1. 다양한 버전의 node.js를 설치할 수 있게 해줌
2. use 커멘드를 이용해 사용할 node 버전으로 간단하게 스위칭할 수 있게 해줌
3. 버전 관리가 쉬워짐

## Webpack

[링크](https://joshua1988.github.io/webpack-guide/)  
웹펙이란, 최신 프런트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러임  
모듈 번들링이란, 웹 애플리케이션을 구성하는 자원들을 하나의 파일로 병합 및 압축해주는 것  
![Webpack](https://joshua1988.github.io/webpack-guide/assets/img/webpack-bundling.e79747a1.png)

## Eslint & Prettier

[링크](https://joshua1988.github.io/web-development/vuejs/boost-productivity/)  
Eslint와 Prettier가 충돌이 나기 때문에 반드시 .eslintrc.js 에 Prettier 설정을 해야함
Prettier, Eslint 초기 설정이 매우 귀찮음  
초기 설정 포멧을 정해놓고 사용하면 좋을듯  
`npm run lint` 를 실행하게 되면 전체 vue 파일에 적용됨 - 개꿀! 
위의 명령어는 npm version 14.0.0 이후부터 사용 가능함 

프로젝트 소스 레벨에서 eslint, prettier 포멧을 관리해야 생산성이 높아짐  

### eslint & prettier 설정 방법
1. nvm 설치 -> node version 관리
2. vscode Extension - prettier, eslint 설치
3. prettier는 disable(workspace)해주고 prettier 규칙은 .eslintrc.js 에 포함시켜줌
```javascript
'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
```
4. setting -> eslint:validate 검색 -> settings.json 
```javascript
   "eslint.validate": [   
      "vue",
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact"
    ],
    "eslint.workingDirectories": [
      {"mode": "auto"}
    ],
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    // don't format on save
    "editor.formatOnSave": false
}
```
5. formatOnSave 체크박스 해제 
6. vscode 최상위 폴더 -> vue.config.js 파일 생성
```javascript
module.exports = {
  devServer: {
    overlay: false, // 여기서 overlay: false는 오류를 더이상 화면에 표시하지 않겠다는 말임.
  },
};
```

## 파일 상대/ 절대 경로
`@/` 절대경로로 컴포넌트 import 가능함 -> vscode에서 가능  
기본적으로 vue project를 생성할 때, jsconfig.json 파일에 설정되어 있음 

## Router
1. src 하위 routes folder -> index.js 생성  
```javascript
export default new VueRouter({
	routes: [
		{
			path: '/login',
			component: LoginPage,
		},
		{
			path: './signup',
			component: SignupPage,
		},
	],
});
```   
2. main.js -> router 등록
3. views folder -> view file 생성(컴포넌트)
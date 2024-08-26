# 나쁜기대치 - 의성올래

해커그라운드 해커톤에 참여하는 나쁜기대치 팀의 의성올래입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**

### 사전 준비 사항
> 도커 데스크탑, 도커 엔진, Azure 계정, 깃허브 계정, 자바 jdk-17

## 시작하기
> https://portal.azure.com/ 에 접속해 로그인을 진행하고 왼쪽 상단의 리소스 만들기 버튼을 클릭해 Azure Database for MySQL를 누르고 만들기를 클릭한 후 유연한 서버를 만드는 것을 선택한다.
> 
> 그 후, 리소스 그룹과 서버이름을 입력하고 관리자 이름 암호를 입력하고 네트워킹에서 방화벽 설정을 0.0.0.0~255.255.255.255로 설정한다. 그 후, 검토 및 만들기를 통해 DB를 만든다.
> 
> github에서 hackersground-kr organization의 hg-BadExpectations 레포지토리를 클릭한다.
> 
> 오른쪽 상단의 Fork버튼을 눌러 Copy the main branch only 항목을 선택 취소한 후, Create fork 버튼을 눌러 fork를 한다.
> 
> fork한 레포지토리로 이동하여 초록색 < >code 버튼을 클릭한다. 그 후, https://github.com/dongchandev/hg-BadExpectations.git을 복사한다.
> 
> 컴퓨터에 임의의 폴더 하나를 만들고, 터미널을 접속하여 앞서 만든 폴더로 경로를 변경하고 git init을 입력한다. 그 후, 복사한 https://github.com/dongchandev/hg-BadExpectations.git를 통해 git remote add origin https://github.com/dongchandev/hg-BadExpectations.git을 적어 원격 브랜치와 연결한다.
> 
> git pull origin backend,git checkout backend 를 차례대로 입력한다.
> 
> 도커 실행하기
> 
> curl -fsSL https://aka.ms/install-azd.sh | bash, azd auth login을 차례대로 입력한다.
> 
> azd init -e BadExpectations를 입력한 후, Use code in the current directory를 선택하고 그 다음 Confirm and continue initializing my app를 선택합니다
> 
> 그 후,  azd up를 입력하고 git add . , git commit -m "init" , git push origin backend 를 차례대로 입력합니다
> 
> azd pipeline config 를 입력하고 첫번째 선택지에서 n을 선택합니다
> 
> gh auth login을 입력하여 깃허브 로그인을 진행하고 다시 커맨드 창으로 돌아와서
gh secret set DB_PASSWORD --body "<DB_PASSWORD>"
gh secret set DB_URL --body "<DB_URL>"
gh secret set DB_USERNAME --body "<DB_USERNAME>"
gh secret set DOCKER_PASSWORD --body "<DOCKER_PASSWORD>"
gh secret set DOCKER_USERNAME --body "<DOCKER_USERNAME>"
해당 명령어를 입력합니다 이 떄 <>안의 값은 실제값으로 대체합니다. DB_PASSWORD와 DB_USERNAME가장 앞부분 db를 만들 때 설정했었고, DB_URL은 https://portal.azure.com 에서 만든 DB를 찾으면 기술되어 있습니다.
> 
> 그 후, https://github.com/사용자 이름/hg-BadExpectations 으로 접속하여 Actions 페이지로 이동해 가장 최근 git action을 들어가 Re-run all jobs 버튼을 누릅니다.

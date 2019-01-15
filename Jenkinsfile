node {

  checkoutScm()
  npmBuild()

  switch(env.BRANCH_NAME) {
    case ["develop","master"]:
      npmStop();
      npmStart();
      dbotValidate();
      break;
    default:
      break;
   }
}

def checkoutScm() {
	stage('Checkout SCM') {
    checkout([$class: 'GitSCM', 
      branches: [[name: env.BRANCH_NAME]], 
      doGenerateSubmoduleConfigurations: false, 
      extensions: [], 
      submoduleCfg: [], 
      userRemoteConfigs: [[url: 'https://github.com/jhosvr/memeho.git']]])
  }
} 

def npmBuild() {
	stage('Install Dependencies') {
		sh 'npm install'
	}
}

def npmStop() {
	stage ('Kill existing instance') {
		sh "if pgrep memeho-${BRANCH_NAME}; then npm stop; else echo 'No existing instance found'; fi"
	}
}

def npmStart() {
  switch(env.BRANCH_NAME) {
    case "develop":
		  withCredentials([string(credentialsId: 'memeho-bot-develop', variable: 'DBOT_TOKEN')]) {
			  stage ('Start new instance') {
				  sh 'JENKINS_NODE_COOKIE=dontKillMe npm start'
          }
      }
      breal;
    case "master":
		  withCredentials([string(credentialsId: 'memeho-bot-master', variable: 'DBOT_TOKEN')]) {
			  stage ('Start new instance') {
				  sh 'JENKINS_NODE_COOKIE=dontKillMe npm start'
			  }
		  }
      break;
	}
}

def dbotValidate() {
	stage ('Validating process') {
		sh 'sleep 3'
		sh "pgrep dbot-${BRANCH_NAME}"
	}
}

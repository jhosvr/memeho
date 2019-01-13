node { 
  if (env.BRANCH_NAME == 'master'){
    PROCESS_NAME = 'memeho-bot-prod'
  } else if (env.BRANCH == 'develop'){
    PROCESS_NAME = 'memeho-bot-test'
  }

  checkoutScm()
  npmBuild()
  npmStop()
  npmStart()

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
		sh 'if pgrep ${PROCESS}; then npm stop; else echo "No existing instance found"; fi'
	}
}

def npmStart() {
	stage ('Start new instance') {
		sh ' JENKINS_NODE_COOKIE=dontKillMe npm start '
		sh ' pgrep memeho-bot '
	}
}

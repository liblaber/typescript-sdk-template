pipeline {
    agent any
    environment {
        NPM_TOKEN = credentials('NPM_TOKEN')
    }
    stages {
        stage('Run Only on Tag') {
            when {
                expression {
                    echo "Branch name. {$env.BRANCH_NAME}"
                    return env.BRANCH_NAME ==~ /^rls_\d+\.\d+\.\d+$/
                }
            }
            stages {
                stage('Pre-check for Environment Variables') {
                    steps {
                        script {
                            if (!env.NPM_TOKEN) {
                                error("Error: NPM_TOKEN is not defined")
                            }
                            echo "NPM_TOKEN is defined."
                        }
                    }
                }
                stage('Checkout Code') {
                    steps {
                        checkout scm
                    }
                }
                stage('Set up Node.js') {
                    steps {
                        sh '''
                            curl -sL https://deb.nodesource.com/setup_20.x | bash -
                            apt-get install -y nodejs
                            node -v
                            npm -v
                        '''
                    }
                }
                stage('Install Dependencies') {
                    steps {
                        sh 'npm ci'
                    }
                }
                stage('Run Tests') {
                    steps {
                        sh 'npm run test'
                    }
                }
                stage('Publish to npm') {
                    steps {
                        sh '''
                            npm config set //registry.npmjs.org/:_authToken=$NPM_TOKEN
                            npm publish
                        '''
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}

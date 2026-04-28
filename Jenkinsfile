pipeline{
  agent any
stages {
  stage ('checkout') {
}
}
  stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App') {
            steps {
                sh 'node app.js'
            }
        }
}

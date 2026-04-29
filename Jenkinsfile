pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/mushrafaallii-code/summa.git'
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
}

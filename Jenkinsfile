pipeline{
    agent any
    stages{
        stage("Docker build "){
            steps{
                sh 'docker build . -t news/app'
            }
        }
        stage("Docker run "){
            steps{
                sh 'docker container run -d -p 3000:3000 news/app'
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
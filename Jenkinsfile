pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git url: 'https://github.com/Evanjaziel/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 2358bc59-de48-4f96-b6a7-be308d3cd824  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                        git url: 'https://github.com/Evanjaziel/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 2358bc59-de48-4f96-b6a7-be308d3cd824  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent1_3"
                    }
                    steps {
                        git url: 'https://github.com/Evanjaziel/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 2358bc59-de48-4f96-b6a7-be308d3cd824  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent1_4"
                    }
                    steps {
                        git url: 'https://github.com/Evanjaziel/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 2358bc59-de48-4f96-b6a7-be308d3cd824  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}
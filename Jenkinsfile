pipeline {
    agent any

    environment {
        PROJECT_DIR = "/var/lib/jenkins/workspace/pipelinetest"
        VENV = "$PROJECT_DIR/venv/bin/activate"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/Nikhilkathale741/PCCM.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                cd $PROJECT_DIR
                . $VENV
                pip install -r requirements.txt
                '''
            }
        }

        stage('Apply Migrations') {
            steps {
                sh '''
                cd $PROJECT_DIR
                . $VENV
                python manage.py makemigrations
                python manage.py migrate
                '''
            }
        }

        stage('Collect Static Files') {
            steps {
                sh '''
                cd $PROJECT_DIR
                . $VENV
                python manage.py collectstatic --noinput
                '''
            }
        }

        stage('Restart Gunicorn') {
            steps {
                sh '''
                pkill gunicorn || true
                . $VENV
                cd $PROJECT_DIR
                gunicorn PCCM.wsgi:application --bind 0.0.0.0:8000 --daemon
                '''
            }
        }
    }
}


pipeline {
    agent any

    environment {
        PROJECT_DIR = "/home/ubuntu/PCCM"
        VENV = "/home/ubuntu/PCCM/venv/bin/activate"
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
                pip install --break-system-packages -r requirements.txt
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
                sudo systemctl restart gunicorn || \
                (pkill gunicorn && \
                cd $PROJECT_DIR && \
                . $VENV && \
                nohup gunicorn PCCM.wsgi:application --bind 0.0.0.0:8000 &)
                '''
            }
        }
    }
}


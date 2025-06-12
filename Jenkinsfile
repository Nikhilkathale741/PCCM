pipeline {
    agent any

    environment {
        PROJECT_DIR = "${WORKSPACE}"
        VENV = "${WORKSPACE}/venv/bin/activate"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                cd $PROJECT_DIR
                source $VENV
                pip install -r requirements.txt
                '''
            }
        }

        stage('Apply Migrations') {
            steps {
                sh '''
                cd $PROJECT_DIR
                source $VENV
                python manage.py makemigrations
                python manage.py migrate
                '''
            }
        }

        stage('Collect Static Files') {
            steps {
                sh '''
                cd $PROJECT_DIR
                source $VENV
                python manage.py collectstatic --noinput
                '''
            }
        }

        stage('Restart Gunicorn') {
            steps {
                sh '''
                pkill gunicorn || true
                cd $PROJECT_DIR
                source $VENV
                nohup gunicorn PCCM.wsgi:application --bind 0.0.0.0:8000 &
                '''
            }
        }
    }
}
       

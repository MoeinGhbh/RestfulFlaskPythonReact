FROM python:3.4.5-slim
WORKDIR /code

# ENV FLASK_APP=main.py
# ENV FLASK_RUN_HOST 0.0.0.0

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD python main.py
# CMD ["python3","main.py","--host","0.0.0.0"]
# CMD ["python3","main.py","runserver"]
# CMD ["python", "main.py"]



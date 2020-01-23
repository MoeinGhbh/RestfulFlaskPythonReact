FROM python:3.4.5-slim
WORKDIR /code
# ENV FLASK_APP main.py
# ENV FLASK_RUN_HOST 0.0.0.0
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
# CMD ["python", "main.py"]
CMD python main.py



# # Alpine base image that contains python 3.10
# FROM python:3.4.5-slim
# # define the directory to work in
# WORKDIR /code
# # copy the requirements.txt file to the work directory
# COPY requirements.txt .
# # Install some system deps in a virtual environment named .build-deps, you can name it what ever you want
# # install pip dependencies in the same layer
# RUN apk add --no-cache --virtual .build-deps \
#     build-base openssl-dev pkgconfig libffi-dev \
#     cups-dev jpeg-dev && \
#     pip install --no-cache-dir -r requirements.txt && \
#     apk del .build-deps # delete the .build-deps in the same layer
# # Copy rest of the source code
# COPY . /code
# # EXPOSE the needed ports, for example 8080
# EXPOSE 5000
# # Running Command or Entry Point
#  CMD python code/main.py




# FROM python:3.4.5-slim

# WORKDIR /code

# ADD . . 

# RUN pip install -r requierments.txt

# EXPOSE 5000

# # ENV FLASK_APP=HelloWorld.py 

# CMD ["python","main.py","runserver"]




///////////////////////////Создаем виртуальное окружение для проекта чтобы через pip установить библиотеки для локального тестирования того же контейнера///////////////////////////////
Проверка Python в VS Code

Сначала убедимся, что VS Code видит правильный Python.

В терминале VS Code выполни:

python --version


Должно вывести что-то вроде Python 3.12.x

Если выдаёт ошибку или показывает старую версию — нужно выбрать интерпретатор.

Выбор интерпретатора в VS Code:

Нажми в правом нижнем углу VS Code на версию Python (или Ctrl+Shift+P → Python: Select Interpreter)

Выбери версию Python 3.12, установленную на твоём ПК.


///////////////////////////////// Создание виртуального окружения////////////////////////


python -m venv venv

Если Python не виден, используй полный путь к нему,\\\\\\\\\\\\\\\\\ например: и папка не создалась то вот ральное решение  

C:\Users\ACER\AppData\Local\Programs\Python\Python312\python.exe -m venv venv

///////////////////////Проверить наличие скриптов
dir .\venv\Scripts\


Должны быть файлы Activate.ps1 и activate.bat.


///////////////////    Активировать окружение

.\venv\Scripts\Activate.ps1

///////////////////////
Проверить pip
pip --version

///////////   Создать файл  requirements.txt где будут все зависимости ////////////////////

pip freeze >requirements.txt





\\ Запуск  образов самый простой

docker run hello-world

docker run ngibx

.. Докер команды

docker ps  // какие контейнеры в текущий момент активны

docker ps -a  // посмотреть все контейнеры

docker images \\ посмотреть какие у нас есть образы



\\\\\\\\\\\Сначала удаляем контейнер, а потом удаляем образ

docker ps -a  // посмотреть все контейнеры
docker images \\ посмотреть какие у нас есть образы



doker rm ccd20d0a7291  //    \\ удалить контейнер по ID
doker rm strange_ishizaka  //    \\ удалить контейнер по имени

doker rmi 56433a6be3fd  //    \\ удалить образ по имени или ID  версию через двоеточие :

docker images \\ посмотреть какие у нас остались образы



\\\\\\\\\\\\\\\\\\   если нужна особенная версия docker pull postgress:16

docker pull hello-world   \\\\ если что то хотим загрузить

\\\\\\\\\\\\\\\\\\  команда docker run используется для запуска контейнера уже скачанного образа

docker run nginx

\\ -d значит запустить в фоновом режиме, -p это  какой порт пробросить

docker run -d -p 8080:80 nginx  \\\\\\ 80 это порт контейнера, а 8080 это порт компа ////// ЕСЛИ ПРОГА ЗАКРОЕТСЯ ТО ЗАНОВО ЗАПУСКАТЬ NGINX В ФОНОВОМ РЕЖИМЕ НАДО ЭТОЙ КОМАНДОЙ

docker ps -a  // посмотреть все контейнеры
docker ps   // посмотреть все контейнеры которые сейчас запущены

docker stop upbeat_bardeen (имя или ID)\\\\\\ остановить контейнер

docker start sharp_brown \\\\\ запустить уже ранее запускаемый контейнер



docker stop upbeat_bardeen (имя или ID)

docker ps -a  // посмотреть все контейнеры  снова вбиваем чтобы посмотеть что 5 sec ago


docker run -d -p 8080:80 --name your_name nginx   \\\\ если хотите запустить контейнер и присвоить ему свое имяБ а не рандомное


\\\\\\\\\\ так же можно в докер зайти через командную строку

docker login   \\\ и откроется окно дополнительное для авторизации

docker push (указываем свой докерхаб)   \\\\\\\ загружать свои образы в удаленный репозиторий

docker search pyhton      \\\\\ если искать образы в терминале без браузера


docker run-d -p 6379:6379 redis \\\\\\\ запустили redis с его портами

docker run -d -p 6379:6379 --name arams_redis redis   /////// запустил со своим именем


docker run --rm hello-world   /////////////// если сразу после выполнения контейнера его нужно удалять то запускаем его именно так, в конце название контейнера

docker run -it daemon-name sh\\\\\\\ получить интерактивный режим i= интерактивный режим t= терминал 

docker run -it alpine sh

ls   \\ это уже в появившейся эмуляции командной строки .alpine это урещанная версия линукса для микрокомпьютеров

exit ///// выход


docker run -d --rm --name my_nginx -p 8000:80 nginx        ////// комбинированный вариант запуска  пир котором контейнер удалится после остановки 



docker logs aram_nginx        \\\\\\\\\\ посмотреть логи

docker logs --tail 5 aram_nginx        \\\\\\\\\\ последние логи, можно самому выставить наприиер 5

docker logs -f aram_nginx        \\\\\\\\\\ смотреть логи в реальном времени -f = follow





docker inspect aram_nginx                  \\\\\\\\\\\\\\посмотреть внутреннюю информацию о контейнере /// выдаст JASON

coker container prume       \\\\\\\\ удалить все контейнеры

coker image prume    //////// удалить все образы у которых еще не запущены контейнеры... так как при запущеных контейнерах нельзя удалять образы



docker exec -it aram_nginx bash         \\\\\\\\\\\\\\\\\  попасть внутрь контейнера  и после docker exec уже указываем что мы хотим вызвать или сделать
ls
exit

\\\\\\\\ запускаем redic с командой   exec  чтобы внутри что то выполнить с методом  redis-cli  Redis CLI (интерактивная консоль Redis).
Redis — это сверхбыстрая база данных в оперативной памяти (In-Memory Database).
Она не хранит данные на диске, как обычные базы (например, PostgreSQL или MySQL), а держит их прямо в оперативной памяти, поэтому работает в сотни раз быстрее.


docker exec -it arams_redis redis-cli







/////////////////////СОЗДАЕМ СВОЙ ОБРАЗ /////////////////////

<!-- команда для сощдания образа  . точка обозначает что(к текущей папке) докер файл находится в той же директории где и командная строка  например (venv) PS C:\Users\ACER\OneDrive\Desktop\JavaRush_University\VS code JAVARUSH lessons\L15Docker2> -->
<!--  -t тэг.. чтобы назвать свой файл (aramfastapi) -->
docker build -t aramfastapi .

docker images \\ посмотреть какие у нас есть образы

docker build -t aramfastapi:1.1 .           \\\\\\\\  как указывать версию контейнера... чрез двоеточие после названия 

docker rmi aramfastapi:1.1         \\\\\\\\\\\\\\  при удалени образов с версиями придется уже указывать версию!!!!!!!   docker rmi aramfastapi:latest


docker run -p 8001:8000 aramfastapi:1.1   \\\\\\\\ запускаем контейнер -p пробрасываем порты и указываем с какой версии образа нужно запустить контейнер




docker run -d -p 8001:8000 aramfastapi:1.1 ////// 8001 это внешний порт, в браузере его указатьБ а 8000 это внутренний самого контейнера и запускаем в фоновом режиме так что придется останавливать потом командой stop

-p [порт_хоста]:[порт_в_контейнере]
8001 — порт твоего компьютера (хоста).
На него ты обращаешься, например, открывая в браузере:

http://localhost:8001
8000 — порт внутри контейнера, на котором работает сервер FastAPI

.... пробрасывать порты = МАПИТЬ  от MAPING

docker run -d -p 8001:8000 --name gala1 aramfastapi:1.1    /////// тут мы контейнеру еще и привоим имя для просто понимания





.........\\\\\\\\\\\\\\\\\\\\\\\\ В DOCKER по умолчанию 4 сети /////////////////////............

Bridge   виртуальная локальная сеть между контейнерами по умолчанию 

Host контейнер использует сеть хоста напрямую

None  полная изоляция без сети

Overley  docker swarm  для оркестрации с контейнерами из нескольких машин


<!-- Перед созданием образа и контейнеров необходимо перейти в ту папку\директорию откуда будет создаваться образ и где находится Docker afqk по которому мы все будем запускать -->

cd ..   подняться на один уровень выше
cd ./L15Docker2

docker network create aramnet  \\\ создаем сеть

docker run --name aramredis --network galanet redis    /// Запускаем контейнер redis с заданным именем и сетью на основе образа redis

docker run -d --name gala_fastapi --network galanet aramfastapi:1.2 \\\\ запускаем контейнер gala_fastapi с сетью на основе образа aramfastapi:1.2

\\\\\\\ если хотим использовать сеть хоста если контейнер не изолирован по сети от хоста!! когда любой порт открыт \\\ любой порт  открытый внутри контейнера будет автоматически отрыт снаружи 
<!-- После --network host  пишется -->
docker run -d --name gala_fastapi --network host aramfastapi:1.2        


<!-- если запускаем польностью изолированный контейнет пишем там где --network none -->
docker run -d --name gala_fastapi --network none aramfastapi:1.2 

docker network create --driver bridge mynet3   \\\\\\ тут еще и драйвер указал при создании сети

docker network inspect galanet     \\\\\ посмотреть что внутри сети, айпи  итд в jason файле



\\\\\\\\\\\\ Запускаем уже проект и для начала запускаем линукс с командной строкой

<!-- Создем два контейнера чтобы из потом пинговать -->
<!-- Сделаем два терминала и в каждом  выполним команды после которых откроется линукс с командной строкой -->

docker run -it --rm --name my_linux --network galanet alpine sh

docker run -it --rm --name my_linux --network galanet alpine sh

<!--  в командной строке мы пишем .... пингуем другой контейнер-->

ping my_linux2
ping my_linux

ctrl + c превать пингование

<!--  потом можно заглянуть в нашу запущенную сеть и увидеть там наши два контейнера которые были запущены в этой сети  -->
docker network inspect galanet


<!-- Создали новый образ -->
docker build -t aramfastapi:1.3 .

<!-- Создаем из этого образа контейнер с параметрами  новый --expose 8000 -->

docker run -d --name armcont --network galanet --expose 8000 aramfastapi:1.3

<!-- открываем  новый терминал и в нем запускаем контейнер с линуком и командной строкой -->

docker run -it --rm --name armcont2 --network galanet alpine sh

<!-- в командной строке кое что утановим     apk update — это команда для обновления списка пакетов в Linux-дистрибутиве Alpine.-->  
apk update

<!-- установить пакет curl в Alpine Linux.   для отправки curl запроса--> 
apk add curl
apk add iputils

curl http:\\armcont:8000

exit

///////// удаляем сетки после отсановки и удаления образов

docker network ls /// смортим список

docker network rm galanet //// удаление сети




\\\\\\\\\ДАННЫЕ    прям в докере можно двумяспособами volumes (управляется докером на диске вне контейнера) и 

<!-- Создаем образ без указания сети -->
docker run -it --rm --name datacont alpine sh 

<!-- в запущенном терминале пишем  и создадим текстовый файл и потом его найдем при команде ls -->
echo "Hello, Vlada!" > hello.txt
ls
exit


////// для хранения данных нам нужно создать отдельный контейнер чтобы он был для долговременного хранения

<!-- откроется командная строка -->
docker run -it --name datacont alpine sh


<!-- 1 способ СОЗДАЕМ ЧЕРЕЗ volumes  -->
<!-- Сначала меняем директорию -->
cd /var/lib/docker/volumes

Если у тебя Docker Desktop (обычная Windows-версия)

Docker хранит данные здесь:

C:\ProgramData\DockerDesktop\vm-data\


или более конкретно для volumes:

\\wsl$\docker-desktop-data\data\docker\volumes\


<!-- этот образ постгреса нужен для создания контейнера с данными -->
docker run postgres

<!-- запускаем  -->  -v values указали что будем использовать управляемое докером место pgdata и указали место и образ постгресс 17 на основе которого будет создан контейнер

docker run -d --name gala_database -v pgdata:/var/lib/postgresaql/data postgres:17

<!-- 2 способ  создания контейнера для файлов -->
<!-- подключим папку .. указываем абсолютный путь--> и этот контейнер будет видеть содержмое как свою папку где и файлы контейнера   в конце указали существующий образ
cd ./L16Docker3
docker run -d --name gala_db_way2 -v "C:\Users\ACER\OneDrive\Desktop\JavaRush_University\VS code JAVARUSH lessons\L16Docker3" -w /app aramfastapi:1.3

<!-- еще один контейнер создаем  и запускаем на пайтоне  -->
 docker run -d --name gala_db_way3 -v "C:\Users\ACER\OneDrive\Desktop\JavaRush_University\VS code JAVARUSH lessons\L16Docker3" -w /app python:3.11-slim uvicorn app:app --host 0.0.0.0 --port 8000     


 <!-- создаем свой volume -->
 docker volume ls

<!-- создадим свою папку volume  и потом проверим и посмотрим ее в списке ls -->
 docker volume create pgdata_temp
 docker volume ls


 docker volume inspect pgdata_temp

<!-- удалить volume -->

docker volume rm pgdata_temp

<!-- новый контейнер с постгресом запускаем с созданной папкой pgdata_temp  и еще другими условиями -->  -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=mydb  это переменные окружения \\\\ всегда эти три надо указывать при запуске базы данных

docker run -d --name gala2222_database -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=mydb -v pgdata_temp:/var/lib/postgresaql/data -p 5432:5432 postgres:17 

<!--  -->
docker volume ls

docker volume inspect pgdata_temp

<!-- можно остановить контейнер и удалить одной командой -->

docker rm -f gala_db_way3


                \\\\\\\\\\\\\\\\\\\<!-- РАБОТА С DICKER COMPOSE -->\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

docker compose  up ....                               \\\\\\\\\\\\\\\\\\\ запускаем все контейнеры одной командой

cd ./L17DockerCompose

<!-- Всегда нужно запускать из той директории где докер файл.... чтобы не мучиться с относительными путями -->


<!-- Запускаем в докере docker-compode файл вот такой командой -->

docker compose up

<!-- Отстановить или удалить контейнеры в docker compose -->

docker compose down   \\\\удалим все контейнеры    перед этим они останавливаются    образы остаются

docker compose up -d   ///// так же запустить в фоновом режиме

<!-- Посмотреть состояние сервисов -->

docker compose ps 
docker compose ps -a   ///// увидим какие контейнеры у сервисов есть

//// посмотреть что сервисы выводили в консоль.. их состояние

docker compose logs

<!--  если нужно перезапусть сервис -->

docker compose restart

////// так же можно перезапускать какой то конкретный образ

docker compose restart app  //////название app как название сервиса можно найти в своем же docker-compose файле... там 
docker compose restart db

/// каждая строка в SERVICES является образом какогото сервиса


<!-- как отследить если какойто сервис упал в докер компос -->



///////Так же в докер файле можно указать такое --no-cache-dir -r для удаления кеша и мосора после установки

RUN pip install --no-cache-dir -r requirements.txt

--no-cache-dir   Флаг говорит pip не сохранять кэш пакетов..Уменьшает размер Docker-образа.\Не хранит внутри контейнера лишние .whl и временные файлы.\Делает сборку “чище”.

-r requirements.txt    \\\\\ Говорит pip: «Установи все пакеты из файла requirements.txt»



<!-- запускаем созданный но там с нетворк проблемы.. все решается если удалить -->
 docker compose up -d


 //////// выносим переменные окружения в файл .env в таком формате

       POSTGRES_USER=postgress
      POSTGRES_PASSWORD=password
      POSTGRES_DB=postgres  


      docker compose config   ////////// посмотреть конфигурацию контейнера

      docker exec -it step3fastapi-web-1 bash  /////////// подключиться внутрь какого то контейнера, в конце имя контейнера  и подключиться к bash  и уже в его командной строке можем вводить команды

cat main.py   ////// вывести даныые в директории main.py

pip install psycopg2-binary   //// плагин для подключения к постгресу

      <!-- Проверим доступ -->


      pyhton
      import psycopg2
      conn = psycopg2.connect(
      dbname="postgres",
      user="postgres",
      password="password",
      host="db",
      port=5432
      )
      >>> exit 
      Use exit() or Ctrl-D (i.e. EOF) to exit
      >>> exit()

docker compose kill   ///// жестко останавливает контейнеры


///////////  Lesson 18 //////////

<!-- Флаг --build мы используем если хотим собрать и потом будем менять\редактировать app.py, в противном случае если просто с UP, то образ не будет пересобираться при изменениях   -->
docker compose up --build  



<!-- УСТАНАВЛИВАЕМ DJANGO когда начали формировать архитектуру для step3 -->

pip install django

 cd ../step3/src    ///// подняться из директории выше и сразу зайти в нужные папки

 django-admin startproject myproject .     /// установим джанго в текущую директорию

 <!-- чтобы в requirements добавить все зависимости  -->

 pip install gunicorn

 pip install psycopg2-binary

 pip list

 pip freeze > requirements.txt


 CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]





 <!-- отредактировали файл settings.py   in /myproject -->
 <!-- подставили значения из докер компос-->

 DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.posrgresql',
        'NAME': os.environ.get('POSTGRES_DB'),
        'USER': os.environ.get('POSTGRES_USER'),
        'PASSWORD': os.environ.get('POSTGRES_PASSWORD'),
        'HOST': 'db',
        'PORT': 5432

    }
}

<!-- теперь можем запускать  -->

docker compose up -d --build

<!-- переходим в директорию src -->

cd ./src

<!-- запускаем django -->  потомму что пока что джанго у нас не запущен в контейнере, в контейнере только база данных пока


<!-- добавим еще один вервис web -->


<!-- запускаем -->
docker compose up -d --build

<!--  посмотрим логи -->
cd ..
docker compose logs

docker compose logs db

docker compose logs web


<!-- посмотрим на наши два контейнера -->
docker compose ps


<!-- дополняем docker-compose файл еще сервисами для приближения с реальности -->

  redis:
    image: redis:7
    restart: always

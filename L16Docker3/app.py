

import uvicorn
from fastapi import FastAPI, Request, HTTPException


from fastapi.staticfiles import StaticFiles




# Создали эклемпляр класса, это само приложение
app = FastAPI()


# Задаем маршруты с методом .get Это функции представления или Вьюшки, ведут на страницы
# для главной срабатывает функция индекс итд

@app.get('/')
async def index():
    # context = {'request':request}
    return {'message': 'My first image adn first container'}






#  uvicorn app:app --reload --host localhost --port 8001    чтобы запустить сервер с терминала
# Вызываем функцию
if __name__ == '__main__':
    uvicorn.run('app:app', host='127.0.0.1', port=8000, reload=True)
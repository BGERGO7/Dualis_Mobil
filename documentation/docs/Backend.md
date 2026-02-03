## Áttekintés

A backend egy Node.js alapú Express alkalmazás, amely RESTful API-t biztosít egy egyszerű blog platform számára.  
Az alkalmazás Sequelize ORM-et használ SQLite adatbázissal fejlesztési környezetben, amely könnyen cserélhető MySQL-re production környezetben.  
A projekt MVC architektúrát követ (models, controllers, routes).

A rendszer tartalmaz egy külső API integrációt is (PokéAPI), amely Pokémon adatok lekérdezésére szolgál.

---

## Technológiai stack

- Node.js
- Express
- Sequelize ORM
- SQLite (fejlesztéshez)
- Axios (külső API hívásokhoz)
- CORS
- body-parser
- dotenv
- nodemon

---

## Installáció

A projekt futtatásához Node.js szükséges.

Telepítsd a függőségeket:

```bash
npm install
```
## Api végpontok

### 1. Új cikk létrehozása

`POST /api/registerArticle`

**Request body:**
```json
{
  "title": "Cikk címe",
  "content": "Rövid tartalom",
  "contentLong": "Hosszú tartalom",
  "authorName": "Szerző neve",
  "imageUrl": "https://example.com/image.jpg"
}
```

### 2. Összes cikk lekérdezése

`GET /api/getAllArticles`

**Request body:**
```json
{
  "data": [
    {
      "id": 1,
      "title": "Cikk címe",
      "content": "Rövid tartalom",
      "contentLong": "Hosszú tartalom",
      "authorName": "Szerző neve",
      "imageUrl": "https://example.com/image.jpg",
      "createdAt": "2026-01-27T10:30:00.000Z",
      "updatedAt": "2026-01-27T10:30:00.000Z"
    }
  ]
}
```



### 3. Egy cikk lekérdezése ID alapján

`GET /api/getAllArticle/id`

**Request body:**
```json
{
  "data": {
    "id": 1,
    "title": "Cikk címe",
    "content": "Rövid tartalom",
    "contentLong": "Hosszú tartalom",
    "authorName": "Szerző neve",
    "imageUrl": "https://example.com/image.jpg",
    "createdAt": "2026-01-27T10:30:00.000Z",
    "updatedAt": "2026-01-27T10:30:00.000Z"
  }
}
```

### 4. Cikk törlése

`DELETE /api/deleteArticle/id`



### 5. Pokémon adatok lekérdezése


`GET /api/pokemon/name`

**Request body:**
```json
{
  "data": {
    "id": 25,
    "name": "pikachu",
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "type": {
      "name": "electric",
      "url": "https://pokeapi.co/api/v2/type/13/"
    }
  }
}
```

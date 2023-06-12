# REMEDIAL 

# API Documentation

## Create User

Request :
- Method : `POST`
- Endpoint : `/api/users/signup`
- Request Body :

```json 
{
    "username" : "Budi",
    "email" : "budi12@gmail.com",
    "password" : "budi123",
    "role" : "user",
}
```

- Response :

```json 
{
    "message": "User created successfully"
}
```

## Login

Request :
- Method : `POST`
- Endpoint : `/api/users/signin`
- Request Body :

```json 
{
    "email" : "Budi",
    "password" : "budi12@gmail.com"
}
```

- Response :

```json 
{
    "message": "Successful Login",
    "token": "token"
}
```

---

## Get All Article

Request :
- Method : `GET`
- Endpoint : `/api/articles`

- Response :

```json 
{
    "status": "Success",
    "data": [
        {
            "_id": "64847eb6ca51fc1a63871240",
            "title": "Memento Mori; Pameran Tunggal Prajna Puspa Arum",
            "content": "isi kontent artikel",
            "author": "Budi Santoso",
            "releaseDate": "2023-02-09T00:00:00.000Z",
            "timesRead": "10 min",
            "articleImgUrl": "http://api-remedial-production-ecd6.up.railway.app/uploads/article-images/1686404785052.png",
            "categoryDetails": [
                {
                    "categoryName": "Hello Siswa"
                }
            ]
        },
        {
            "_id": "648480cbca51fc1a6387124a",
            "title": "Ucok : “Gue Tahu Musik dari Tongkrongan”",
            "content": "Isi konten artikel",
            "author": "Rianto Setiawan",
            "releaseDate": "2019-07-24T00:00:00.000Z",
            "timesRead": "15 min",
            "articleImgUrl": "http://api-remedial-production-ecd6.up.railway.app/uploads/article-images/1686405321724.png",
            "categoryDetails": [
                {
                    "categoryName": "Berita Seni"
                }
            ]
        },
        {
            "_id": "6484823dca51fc1a63871258",
            "title": "Dongeng Pukul 10",
            "content": "Isi konten artikel",
            "author": "Rianto Setiawan",
            "releaseDate": "2019-04-28T00:00:00.000Z",
            "timesRead": "18 min",
            "articleImgUrl": "http://api-remedial-production-ecd6.up.railway.app/uploads/article-images/1686405692529.png",
            "categoryDetails": [
                {
                    "categoryName": "Pena Siswa"
                }
            ]
        },
        ...
    ]
}
```

## Get Article By Category

Request :
- Method : `GET`
- Endpoint : `/api/articles?categoryName=Sekolahan`

- Response :

```json 
{
    "status": "Success",
    "data": [
        {
            "_id": "64848337ca51fc1a63871261",
            "title": "Catatan Kecil Mengenai Pameran DipoFest 2019",
            "content": "Isi konten artikel",
            "author": "Dian Putri",
            "releaseDate": "2019-10-20T00:00:00.000Z",
            "timesRead": "16 min",
            "articleImgUrl": "http://api-remedial-production-ecd6.up.railway.app/uploads/article-images/1686405928944.png",
            "categoryDetails": [
                {
                    "categoryName": "Sekolahan"
                }
            ]
        },
        {
            "_id": "6484839fca51fc1a63871264",
            "title": "Mengapa siswa harus Pameran?",
            "content": "Isi konten artikel",
            "author": "Rianto Setiawan",
            "releaseDate": "2020-05-11T00:00:00.000Z",
            "timesRead": "15 min",
            "articleImgUrl": "http://api-remedial-production-ecd6.up.railway.app/uploads/article-images/1686406044782.png",
            "categoryDetails": [
                {
                    "categoryName": "Sekolahan"
                }
            ]
        },
        ...
    ]
}
```

## Get Latest Articles

Request :
- Method : `GET`
- Endpoint : `/api/articles/latest` or `/api/articles/latest?limit=1`, default limit=3

- Response :

```json 
{
    "status": "Success",
    "data": [
        {
            "_id": "64847eb6ca51fc1a63871240",
            "title": "Memento Mori; Pameran Tunggal Prajna Puspa Arum",
            "content": "Isi konten artikel",
            "author": "Budi Santoso",
            "releaseDate": "2023-02-09T00:00:00.000Z",
            "timesRead": "10 min",
            "articleImgUrl": "http://api-remedial-production-ecd6.up.railway.app/uploads/article-images/1686404785052.png",
            "categoryDetails": [
                {
                    "categoryName": "Hello Siswa"
                }
            ]
        }
    ]
}
```

## Get Detail Article

Request :
- Method : `GET`
- Endpoint : `/api/articles/:id`

- Response :

```json 
{
    "status": "Success",
    "data": [
        {
            "_id": "6484843bca51fc1a63871267",
            "title": "Penting Menguasai Sketchup bagi Siswa",
            "content": "Isi konten artikel",
            "author": "Rina Fitriani",
            "releaseDate": "2021-07-12T00:00:00.000Z",
            "timesRead": "10 min",
            "articleImgUrl": "http://api-remedial-production-ecd6.up.railway.app/uploads/article-images/1686406203135.png",
            "categoryDetails": [
                {
                    "categoryName": "Sekolahan"
                }
            ]
        }
    ]
}
```

---

## Get All Article Categories

Request :
- Method : `GET`
- Endpoint : `/api/article-categories`

- Response :

```json 
{
    "status": "Success",
    "data": [
        {
            "_id": "64847d59ca51fc1a6387122c",
            "categoryName": "Hello Siswa"
        },
        {
            "_id": "64847d66ca51fc1a6387122f",
            "categoryName": "Berita Seni"
        },
        {
            "_id": "64847d6fca51fc1a63871232",
            "categoryName": "Pena Siswa"
        },
        {
            "_id": "64847da8ca51fc1a63871236",
            "categoryName": "Sekolahan"
        },
        ...
    ]
}
```

## Get Detail Article Category

Request :
- Method : `GET`
- Endpoint : `/api/article-categories/:id`

- Response :

```json 
{
    "status": "Success",
    "data": [
        {
            "_id": "64847d59ca51fc1a6387122c",
            "categoryName": "Hello Siswa"
        }
    ]
}
```

---

## Add Article Category

Request :
- Method : `POST`
- Endpoint : `/api/admin/article-categories`
- Headers:
    - `Authorization: Bearer [admin_token]`
- Request Body:

```json 
{
    "categoryName": "Mata Rungu"
}
```

- Response :

```json 
{
    "status": "Success",
    "message": "Article Category created successfully",
    "data": {
        "categoryName": "Mata Rungu",
        "createdBy": "6480ae27d61dfb720638e3fc",
        "updatedBy": "6480ae27d61dfb720638e3fc",
        "_id": "648495a1ca51fc1a63871281",
        "createdAt": "2023-06-10T15:24:17.536Z",
        "updatedAt": "2023-06-10T15:24:17.536Z",
        "__v": 0
    }
}
```

## Update Article Category

Request :
- Method : `PUT`
- Endpoint : `/api/admin/article-categories`
- Headers:
    - `Authorization: Bearer [admin_token]`
- Request Body:

```json 
{
    "categoryName": "Mata Hati"
}
```

- Response :

```json 
{
    "status": "Success",
    "message": "Article Category updated successfully",
    "data": {
        "_id": "648495a1ca51fc1a63871281",
        "categoryName": "Mata Hati",
        "createdBy": "6480ae27d61dfb720638e3fc",
        "updatedBy": "64846e26ca51fc1a63871208",
        "createdAt": "2023-06-10T15:24:17.536Z",
        "updatedAt": "2023-06-10T15:26:23.792Z",
        "__v": 0
    }
}
```

## Delete Article Category

Request :
- Method : `DELETE`
- Endpoint : `/api/admin/article-categories`
- Headers:
    - `Authorization: Bearer [admin_token]`

- Response :

```json 
{
    "status": "Success",
    "message": "Article category deleted successfully"
}
```

---

## Add Article

Request :
- Method : `POST`
- Endpoint : `/api/admin/articles`
- Headers:
    - `Authorization: Bearer [admin_token]`
- Request Body:

`Form Data`
- title : Pertemuan Ke Tujuh : Ngobrol Bareng OK Video
- content : Isi konten artikel.
- author : Andi Cahyono
- category : 64847daeca51fc1a63871239
- releaseDate : 2019-02-15
- timesRead : 15 min
- articleImg : image.png

- Response :

```json 
{
    "status": "Success",
    "message": "Article created successfully",
    "data": {
        "title": "Pertemuan Ke Tujuh : Ngobrol Bareng OK Video",
        "content": "Isi konten artikel.",
        "author": "Andi Cahyono",
        "category": "64847daeca51fc1a63871239",
        "releaseDate": "2019-02-15T00:00:00.000Z",
        "timesRead": "15 min",
        "articleImg": "1686411677109.png",
        "articleImgUrl": "http://api-remedial-production-ecd6.up.railway.app/uploads/article-images/1686411677109.png",
        "createdBy": "64846e26ca51fc1a63871208",
        "updatedBy": "64846e26ca51fc1a63871208",
        "_id": "6484999eca51fc1a6387128a",
        "createdAt": "2023-06-10T15:41:18.866Z",
        "updatedAt": "2023-06-10T15:41:18.866Z",
        "__v": 0
    }
}
```

## Update Article

Request :
- Method : `PUT`
- Endpoint : `/api/admin/articles/:id`
- Headers:
    - `Authorization: Bearer [admin_token]`
- Request Body:

`Form Data`
- title : Pertemuan Ke Tujuh : Ngobrol Bareng OK Video
- content : Isi konten artikel.
- author : Andi Cahyono
- category : 64847daeca51fc1a63871239
- releaseDate : 2023-05-11
- timesRead : 14 min
- articleImg : imageUpdate.png

- Response :

```json 
{
    "status": "Success",
    "message": "Article updated successfully"
}
```

## Delete Article

Request :
- Method : `POST`
- Endpoint : `/api/admin/articles`
- Headers:
    - `Authorization: Bearer [admin_token]`

- Response :

```json 
{
    "status": "Success",
    "message": "Article deleted successfully"
}
```

---


## Add Data User

Request :
- Method : `POST`
- Endpoint : `/api/users/data-users`
- Headers:
    - `Authorization: Bearer [token]`
- Request Body:

`Form Data`
- fullName : Budi Hariyanto
- email : budi@gmail.com
- noPhone : 081273849382
- birthPlace : Medan
- birthDate : 2010-10-10
- gender : Pria
- school : SMAN 0 Medan
- instagram : budi12
- address : Jl. Kamboja No 1
- motivation : Ingin mengeksplor kemampuan
- portfolioFile : portfolio.pdf

- Response :

```json 
{
    "status": "Success",
    "message": "User data created successfully",
    "data": {
        "fullName": "Budi Hariyanto",
        "email": "budi@gmail.com",
        "noPhone": "081273849382",
        "birthPlace": "Medan",
        "birthDate": "2010-10-10T00:00:00.000Z",
        "gender": "Pria",
        "school": "SMAN 0 Medan",
        "instagram": "budi12",
        "address": "Jl. Kamboja No 1",
        "motivation": "Ingin mengeksplor kemampuan",
        "portfolioFile": "1686566445227.pdf",
        "portfolioUrl": "http://api-remedial-production-ecd6.up.railway.app/uploads/portfolio-user/1686566445227.pdf",
        "userId": "6486f5c2846ae4f0fbbd10e5",
        "_id": "6486f633846ae4f0fbbd10ea",
        "createdAt": "2023-06-12T10:40:51.567Z",
        "updatedAt": "2023-06-12T10:40:51.567Z",
        "__v": 0
    }
}
```

## Update Article

Request :
- Method : `PUT`
- Endpoint : `/api/users/data-users`
- Headers:
    - `Authorization: Bearer [token]`
- Request Body:

`Form Data`
- fullName : Budi Harianto
- email : budi123@gmail.com
- noPhone : 081273849382
- birthPlace : Medan
- birthDate : 2010-10-10
- gender : Pria
- school : SMAN 0 Medan
- instagram : budi12
- address : Jl. Kamboja No 12
- motivation : Ingin mengeksplor kemampuan
- portfolioFile : portfolio.pdf

- Response :

```json 
{
    "status": "Success",
    "message": "Data user updated successfully"
}
```

## Get Data User

Request :
- Method : `GET`
- Endpoint : `/api/users/data-users`
- Headers:
    - `Authorization: Bearer [token]`

- Response:

```json
{
    "status": "Success",
    "data": [
        {
            "_id": "6486f633846ae4f0fbbd10ea",
            "fullName": "Budi Harianto",
            "email": "budi123@gmail.com",
            "noPhone": "081273849382",
            "birthPlace": "Medan",
            "birthDate": "2010-10-10T00:00:00.000Z",
            "gender": "Pria",
            "school": "SMAN 0 Medan",
            "instagram": "budi123",
            "address": "Jl. Kamboja No 12",
            "motivation": "Ingin mengeksplor kemampuan",
            "portfolioFile": "1686567018896.pdf",
            "portfolioUrl": "http://api-remedial-production-ecd6.up.railway.app/uploads/portfolio-user/1686567018896.pdf",
            "userId": "6486f5c2846ae4f0fbbd10e5",
            "createdAt": "2023-06-12T10:40:51.567Z",
            "updatedAt": "2023-06-12T10:50:21.019Z",
            "__v": 0
        }
    ]
}
```


## Get Class Offline

- Method : `GET`
- Endpoint : `/api/user/kelas-offline`
- Headers:
    - `Authorization: Bearer [token]`

```json 
{
        "_id": "64870bcf940ee216162f19f6",
        "matkul": "Opera",
        "lokasi": "Depok",
        "tanggalMulai": "2023-06-11T00:00:00.000Z",
        "waktu": "09:00",
        "mentor": {
            "_id": "64870b24940ee216162f19f0",
            "nama": "Bagol",
            "spesialisasi": "Opera",
            "createdAt": "2023-06-12T12:10:12.653Z",
            "updatedAt": "2023-06-12T12:10:12.655Z",
            "__v": 0
        },
        "createdAt": "2023-06-12T12:13:03.267Z",
        "updatedAt": "2023-06-12T12:13:03.267Z",
        "__v": 0
    }
```

## Get Class Online

- Method : `GET`
- Endpoint : `/api/user/kelas-offline`
- Headers:
    - `Authorization: Bearer [token]`

```json 
{
        "_id": "64870ac7c2818d6ee6abf5a5",
        "matkul": "Musik",
        "lokasi": "online",
        "tanggalMulai": "2023-06-11T00:00:00.000Z",
        "waktu": "09:00",
        "mentor": {
            "_id": "6486b85daf7e1b54881ffcad",
            "nama": "Ahmad",
            "spesialisasi": "Seni Musik",
            "createdAt": "2023-06-12T06:17:01.324Z",
            "updatedAt": "2023-06-12T06:17:01.325Z",
            "__v": 0
        },
        "createdAt": "2023-06-12T12:08:39.846Z",
        "updatedAt": "2023-06-12T12:08:39.846Z",
        "__v": 0}
```

## Create Mentor

 Method : `POST`
- Endpoint : `/api/mentor`
- Headers:
    - `Authorization: Bearer [token]`

```json 
{
    "message": "Mentor created successfully",
    "data": {
        "nama": "Bagol",
        "spesialisasi": "Opera",
        "_id": "64870b24940ee216162f19f0",
        "createdAt": "2023-06-12T12:10:12.653Z",
        "updatedAt": "2023-06-12T12:10:12.655Z",
        "__v": 0
    }
}
```

## Get All Mentor

 Method : `GET`
- Endpoint : `/api/mentor`
- Headers:
    - `Authorization: Bearer [token]`

```json 
{
    "message": "Successfully retrieved all mentors",
    "data": [
        {
            "_id": "6486b85daf7e1b54881ffcad",
            "nama": "Ahmad",
            "spesialisasi": "Seni Musik",
            "createdAt": "2023-06-12T06:17:01.324Z",
            "updatedAt": "2023-06-12T06:17:01.325Z",
            "__v": 0
        },
        {
            "_id": "64870b24940ee216162f19f0",
            "nama": "Bagol",
            "spesialisasi": "Opera",
            "createdAt": "2023-06-12T12:10:12.653Z",
            "updatedAt": "2023-06-12T12:10:12.655Z",
            "__v": 0
        }
    ]
}
```

## Admin Create Class Offline

 Method : `POST`
- Endpoint : `/api/admin-kelas-offline`
- Headers:
    - `Authorization: Bearer [token]`


```json 
{
    "message": "Offline class created successfully.",
    "kelas": {
        "matkul": "Opera",
        "lokasi": "Jakarta",
        "tanggalMulai": "2023-06-11T00:00:00.000Z",
        "waktu": "09:00",
        "mentor": {
            "_id": "64870b24940ee216162f19f0",
            "nama": "Bagol",
            "spesialisasi": "Opera",
            "createdAt": "2023-06-12T12:10:12.653Z",
            "updatedAt": "2023-06-12T12:10:12.655Z",
            "__v": 0
        },
        "_id": "6487132d2be7a2ed5ba1d860",
        "createdAt": "2023-06-12T12:44:29.157Z",
        "updatedAt": "2023-06-12T12:44:29.157Z",
        "__v": 0
    }
}
```

## Admin Create Class Online

 Method : `POST`
- Endpoint : `/api/admin-kelas-online`
- Headers:
    - `Authorization: Bearer [token]`

# Backend Aplikasi Cache Dengan Redis Server Sederhana

## Tentang Aplikasi

Aplikasi ini adalah aplikasi yang saya gunakan untuk belajar redis server, menggunakan GMAPS API.
Untuk Mendapatkan API KEY nya, bisa di lihat di [Documentation](https://developers.google.com/places/web-service/autocomplete)

## Menjalankan Project

Untuk menjalankan project, bisa dengan :
`nodemon` atau `node server.js`

## Library yang digunakan

`body-parser` untuk handle request data

`cors` untuk mengizinkan aplikasi di akses dari frontend

`dotenv` untuk config environtment variable

`express` framework nodejs

`morgan` untuk monitoring request
 
`node-fetch` untuk fetch API pada Third Party 

`redis` untuk redis client

## Fitur 

aplikasi ini mempunyai 2 routes, yaitu :
- /autocomplete
- /search

## Cara Menggunakan

#### Routes Autocomplete

`/autocomplete/:country/:query` 

- :country => diisi dengan inisial negara
- :query => kata kunci yang ingin dicari

`/autocomplete/:query`
- :query => kata kunci yang ingin dicari

#### Routes Search

`/search/:location/:radius/:type/:keyword`

- :location => merupakan posisi lat dan lang
- :radius => merupakan radius dari titik location 
- :type => type yang ingin dicari. misal Restaurant
- :keyword => kata kunci yang ingin dicari

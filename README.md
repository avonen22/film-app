🎬 Film App

ReactJS ile geliştirilmiş basit bir film arama ve keşif uygulaması.
OMDb API
 kullanarak filmleri listeler, arama yapar ve detaylarını görüntülemenizi sağlar.

🚀 Özellikler

🔍 Film arama (başlığa göre)

📝 Film detaylarını görüntüleme (yönetmen, oyuncular, tür, yıl, imdb puanı vb.)

🎞️ Film kartları ile kullanıcı dostu arayüz

⚡ React Hooks (useState, useEffect) kullanımı

🎨 Basit ve responsive CSS tasarımı

🛠️ Kullanılan Teknolojiler

ReactJS

React Router DOM (sayfa yönlendirme için)

OMDb API

CSS

📦 Kurulum

Projeyi bilgisayarına klonla:

git clone https://github.com/avonen22/film-app.git


Klasöre gir:

cd film-app


Gerekli bağımlılıkları yükle:

npm install


Uygulamayı çalıştır:

npm start


Uygulama varsayılan olarak http://localhost:3000
 adresinde açılır.

🔑 OMDb API Anahtarı

Projede OMDb API kullanılıyor. Ücretsiz bir API anahtarı almak için OMDb API
 sayfasına gidin ve kendi anahtarınızı alın.
fetch işlemi yapılan yerde kendi API anahtarınızı ekleyin:

const res = await fetch(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${search}`);

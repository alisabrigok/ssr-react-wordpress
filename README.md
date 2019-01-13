# Wordpress + React + SSR Using Next.js

Projeyi çalıştırmak için:

- [Docker'ı indir, bilgisayarına kur ve çalıştır.](https://hub.docker.com/editions/community/docker-ce-desktop-mac)

Sonra terminalinden:

- `docker-compose up -d`

ile Wordpress için gerekli her şey direkt yüklenecek ve

- `docker exec -it wp-headless /bin/bash`

ile Docker container'ı çalışmaya başlayacak. Bu ekranda sırasıyla;

- `yarn install`
- `cd frontend`
- `yarn install`

yapıp gerekli npm paketlerinin de yüklenmesini sağladıktan sonra son olarak

- `yarn start`

ile frontend'i de çalıştırabilirsin.

*Wordpress Dashboard:* http://localhost:8080/wp-admin
*Frontend:* http://localhost:3000

admin kullanıcı adı: alisabrigok
şifre: 123456

marketing hesabı kullanıcı adı: marketing
şifre: 123456

*Not:* 

- /merchants API call'ında nearDistance field'ı o anki lat ve lng konumuna uzaklıkta olan merchant'ların listesini vermiyor. nearDistance ne olursa olsun aynı veri dönüyor.
- yine aynı API endpoint'inde limit field'ı sağlanmazsa veri boş geliyor.
- bu durumlar dışında veri çektiğim zaman bazı merchant'ların lat, lng ve image'leri boş string olarak geliyor.

Bu nedenlerden dolayı her ne kadar kullanıcının haritadaki hareket ve yakınlık değiştirmesine göre zoom, lat, lng ve distance'ı hesaplayıp yeni bir call atsam da stcpay sitesindeki gibi bir sonuç alamadım, özellikle limit ve distance fieldlarından dolayı.

Ayrıca son olarak, REST API üzerinden frontend'i ayrı çalışan bir Wordpress projesi olduğundan bu, REST API endpoint açan translation eklentileri ücretli olduğundan çoklu dil ekleyemedim. Polylang ve WPML malesef ücretli sürümlerinde REST API endpoint'leri sağlıyor. Ancak yine de RTL hazır bir halde projeyi bıraktım. Tek gerekli olan bu eklentiler kurulduktan sonra seçilen dile göre veriyi çekmek.





# 🛒 Aplicativo de E-Commerce (React Native + Expo)

Este é um aplicativo de e-commerce desenvolvido com **React Native** usando **Expo**, gerenciamento de estado com Zustand, e um backend completo com **Express + MongoDB**.


## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/0111v/e-commerce-native
cd e-commerce-native
````

### 2. Instale as dependências

```bash
npm install --legacy-peer-deps
```

### 3. Inicie o servidor de desenvolvimento com Expo

```bash
npx expo start
```

Isso vai abrir o **Expo Dev Tools** no navegador. A partir dele você pode:

* Escanear o QR Code com o app **Expo Go** (no seu celular Android ou iOS)
* Pressionar `a` para abrir no emulador Android
* Pressionar `i` para abrir no simulador iOS (somente no Mac)


## 🧠 Tecnologias utilizadas

* **React Native + Expo**
* **Zustand** para gerenciamento de estado
* **NativeWind** (Tailwind CSS adaptado para React Native)
* **Axios** para requisições HTTP
* **AsyncStorage** para persistência local
* **Express + MongoDB** no backend (hospedado no Render)



## 📦 Backend

O app se comunica com a seguinte API:

```
https://e-commerce-fullstack-ujqr.onrender.com
```

Se quiser rodar o backend localmente:

* Clone o repositório do backend
* Instale as dependências (`npm install`)
* Configure o arquivo `.env` com suas variáveis do MongoDB e JWT
* Rode `npm run dev`




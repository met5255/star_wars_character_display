# Star Wars Karakterek - Tesztfeladat (Next.js + TypeScript)

Ez az alkalmazás egy tesztfeladat, **Next.js** és **TypeScript** felhasználásával.
Az oldal a Star Wars karaktereit jeleníti meg lapozható lista nézetben.

## Technológiák

- [Next.js](https://nextjs.org/)
- TypeScript
- Axios – API hívásokhoz
- Material UI – komponensekhez és designhoz
- SWAPI – Star Wars API: [https://swapi.dev/api](https://swapi.dev/api)
- Képek: [https://picsum.photos](https://picsum.photos)
- Custom font

## API dokumentáció

- A felhasznált API: [SWAPI Dokumentáció](https://swapi.dev/documentation)
- A típusdefiníciók és interface-k innen származnak:
  [https://github.com/amitmtrn/swapi-ts/blob/main/src/SWApi.ts](https://github.com/amitmtrn/swapi-ts/blob/main/src/SWApi.ts)

## Fő funkciók

- Karakterek listázása lapozható nézetben
- Keresés karakter név szerint
- Szűrés film és szülőbolygó alapján
- Modal megjelenítés részletes adatokkal
- Error Boundancing komponens (hiba esetén)
- Responsive design (mobil/tablet is)

## Indítás

1. Telepítsd a függőségeket:
```bash
npm install
```

2. Indítsd el a fejlesztői szervert:
```bash
npm run dev
```

3. Nyisd meg böngészőben:
```
http://localhost:3000
```
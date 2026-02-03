---
sidebar_position: 3
---
## Áttekintés
Ez egy egyszerű React Native alkalmazás, amely egy listanézetet valósít meg Expo keretrendszerrel. Az alkalmazás bemutatja az alapvető lista megjelenítési funkciókat mock adatokkal.

## Technológiák
- **React Native** (v0.81.5)
- **Expo** (~54.0.32)
- **React** (19.1.0)
- **React Navigation** (navigációs könyvtárak)


## Főbb Komponensek

### SimpleListItem
Egyedi lista elem komponens, amely megjeleníti:
- Egy képet (48x48 px)
- Címet (title)
- Alcímet (subtitle)

### SimpleListScreen
A fő képernyő, amely egy FlatList-et használ 20 mock elem megjelenítésére. A képek a picsum.photos szolgáltatásról töltődnek be.

## Telepítés és Futtatás

```bash
# Függőségek telepítése
npm install

# Projekt inditasa
npm run dev
```
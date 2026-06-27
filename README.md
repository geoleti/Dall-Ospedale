# Historia familiar Dall’Ospedale

Primera versión de una página estática para el repositorio `geoleti/Dall-Ospedale`.

## Cómo incorporarla

1. Copiar la carpeta `historia-dallospedale` en la raíz del repositorio.
2. Verificar que la carpeta `documentos` quede al mismo nivel que `historia-dallospedale`.
3. Activar GitHub Pages desde `Settings > Pages`, usando la rama `main`.
4. Abrir la página en:

```text
https://geoleti.github.io/Dall-Ospedale/historia-dallospedale/
```

## Estructura esperada

```text
Dall-Ospedale/
├─ documentos/
│  ├─ 1 Pietro Luigi Giuseppe Dall'Ospedale (bisabuelo italiano)/
│  ├─ 2 Luis Vicente Dall'Ospedale (abuelo)/
│  └─ 3 Hector Dall'Ospedale (papá)/
└─ historia-dallospedale/
   ├─ index.html
   ├─ css/historia-dallospedale.css
   └─ js/historia-dallospedale.js
```

## Notas

- Los enlaces a documentos están definidos en `js/historia-dallospedale.js`.
- Los registros migratorios de 1890 y 1914 quedan marcados como datos a verificar por diferencias de edad.
- Para sumar nuevas ramas familiares, agregar personas en `family`, eventos en `timelineItems` y documentos en `documents`.

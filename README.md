## Pasos para meter typescript en el proyecto

# 1- Descomentar el sourceMap, outDir:"./dist", "moduleResolution": "node", "esModuleInterop": true

# 2 Instalar npm i -D tslint y npm i -D typescript

# 3- Ejecutar el siguiente comando ./node_modules/.bin/tslint --init

# la regla que vamos a poner en el tslint.json es la siguiente no-console:true

# Para quye funcione express (y la mayoria de la paquete) tenemos que hacer la siguiente instalacion npm i --save-dev @types/express
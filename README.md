# 🧩 Demo Técnica: Backend con Microservicios + Docker + NestJS + Monorepo

Este proyecto es una **demo técnica** diseñada para probar un **backend en arquitectura de microservicios**, utilizando:

- **NestJS** como framework principal
- **Docker** para orquestación de servicios
- **Monorepo** para la organización del código
- **TypeORM + MySQL** como base de datos
- **Adminer** como panel de administración de la base de datos
- **API Gateway** como punto de entrada unificado

---

## 🚀 Características

- Arquitectura basada en microservicios.
- Monorepo para gestionar varias apps en un mismo repositorio.
- Contenedor de base de datos **MySQL**.
- Panel de administración **Adminer** para gestionar la base de datos vía navegador.
- API Gateway que centraliza las peticiones hacia los microservicios.

---

## 📂 Estructura del proyecto

```mermaid
apps/
├── products/ # Microservicio de productos
│ └── src/
│ ├── products/ # Módulo principal
│ │ ├── entities/ # Entidades de TypeORM
│ │ ├── controllers/ # Controladores (endpoints REST)
│ │ ├── services/ # Servicios (lógica de negocio)
│ │ └── products.module.ts
│ ├── models/
│ │ ├── entities/ # Entidades de TypeORM
│ │ ├── controllers/ # Controladores (endpoints REST)
│ │ ├── services/ # Servicios (lógica de negocio)
│ │ └── models.module.ts
│ ├── brands/
│ │ ├── entities/ # Entidades de TypeORM
│ │ ├── controllers/ # Controladores (endpoints REST)
│ │ ├── services/ # Servicios (lógica de negocio)
│ │ └── brands.module.ts
│ ├── shared/
│ │ ├── entity/ # Entidades bases de TypeORM
│ │ ├── filters/ # Filtros globales
│ │ └── shared.module.ts
│ ├── database/
│ │ ├── migrations/ # Migraciones bases de TypeORM
│ │ ├── providers/ # Proveedores de las bases de datos (pueden ser mas de una)
│ │ ├── config/ # Configuracion de TypeORM
│ │ └── shared.module.ts
│ └── main.ts
│
└── store-gateway/ # API Gateway
│└── src/
│ ├── products/
│ │ ├── controllers/ # Controlador del apigateway hacia products
│ │ ├── services/ # Servicios del apigateway hacia products
│ │ └── shared.module.ts
└── main.ts
libs/ # Librerías compartidas entre microservicios
docker-compose.yml # Configuración de los contenedores
```

---

## 🗺️ Arquitectura

flowchart TD
Client[👤 Cliente] ──> | HTTP Requests | Gateway[🌐 API Gateway]

                | VIA TCP |
    Gateway ──> ProductsService[📦 Microservicio: Products]
            ├─> ModelsService[📦 Microservicio: Products]
            └─> BrandsService[📦 Microservicio: Products]


                | Microservicio Products |
    ProductsService ──> DB[(🗄️ MySQL Database)]
    ModelsService ────> DB [(🗄️ MySQL Database)]
    BrandsService ────> DB [(🗄️ MySQL Database)]

    Adminer[🛠️ Adminer Panel] ───> DB

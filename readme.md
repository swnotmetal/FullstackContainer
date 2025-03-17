# Todo App Architecture

## Container Communication Diagram

```mermaid
flowchart TD
    User[External User] --> Host[Host Machine\nPort 8080]
    Host --> Nginx[NGINX\nPort 80:8080]
    
    subgraph Docker Network
        Nginx -->|"/"| Frontend[Frontend App\nPort 5173]
        Nginx -->|"/api"| Backend[Backend API\nPort 3000:3666]
        Backend --> MongoDB[(MongoDB\nPort 27017:3456)]
        Backend --> Redis[(Redis\nPort 6379)]
    end
    
    classDef external fill:#f9f,stroke:#333,stroke-width:2px;
    classDef container fill:#bbf,stroke:#33f,stroke-width:1px;
    classDef database fill:#bfb,stroke:#3b3,stroke-width:1px;
    
    class User,Host external;
    class Nginx,Frontend,Backend container;
    class MongoDB,Redis database;
```

## Port Mappings

| Service  | Container Port | Host Port | Purpose                      |
|----------|---------------|-----------|------------------------------|
| Nginx    | 80            | 8080      | Reverse proxy entry point    |
| Frontend | 5173          | (none)    | Vite dev server (internal)   |
| Backend  | 3000          | 3666      | API server                   |
| MongoDB  | 27017         | 3456      | Database                     |
| Redis    | 6379          | 6379      | Cache                        |

## Request Flow

1. User sends request to `http://localhost:8080`
2. Nginx routes based on path:
   - Root path (`/`) → Frontend container (app:5173)
   - API paths (`/api/`) → Backend container (server:3000)
3. Backend communicates with databases:
   - MongoDB: `mongodb://the_username:the_password@mongo:27017/the_database`
   - Redis: `redis://redis:6379`
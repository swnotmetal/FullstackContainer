         External User
              │
              ▼
        │ HOST MACHINE │
              │
              │ Port 8080
┌─────────────▼─────────────┐
│                           │
│    NGINX (td-reverse-proxy)   │
│    Container Port: 80     │
│                           │
└───────┬───────────┬───────┘
        │           │
        │           │
┌───────▼───┐   ┌───▼───────┐
│           │   │           │
│  FRONTEND │   │  BACKEND  │
│   (app)   │   │  (server) │
│ Port:5173 │   │ Port:3000 │
│           │   │           │
└───────────┘   └─────┬─────┘
                      │
                      ├────────────┐
                      │            │
                ┌─────▼─────┐  ┌───▼───┐
                │           │  │       │
                │  MONGODB  │  │ REDIS │
                │  (mongo)  │  │       │
                │ Port:27017│  │Port:6379
                │           │  │       │
                └───────────┘  └───────┘
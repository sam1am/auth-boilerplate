from fastapi import FastAPI
from app.core.database import Base, engine
from app.routes import auth
import uvicorn
from fastapi.middleware.cors import CORSMiddleware



# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="User Auth API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["auth"])

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
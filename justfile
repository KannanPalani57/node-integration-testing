set shell := ["cmd.exe", "/c"]

DATABASE_URL := "postgresql://user:password@localhost:5432/mydatabase"
MIGRATION_FOLDER := "db/migrations"

# Run migrations up
migrate-up:
    migrate -database {{DATABASE_URL}} -path {{MIGRATION_FOLDER}} up

# Run migrations down
migrate-down:
    migrate -database {{DATABASE_URL}} -path {{MIGRATION_FOLDER}} down

# Run the development server
run:
  npm run dev

test: 
  npm run test
## Running the client

- `cd client`
- `pnpm i`
- `npm run dev`

## Running the server

- `cd server`
- `pnpm i`
- `npm run seed`
- `npm run dev`

### Testing after database has been seeded

Make sure to run seed command `npm run seed` at least once. Also ensure the server is running `npm run dev`

#### Login as Admin:

```bash
curl -X POST http://localhost:8080/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"admin@example.com","password":"Admin123!"}'
```

```bash
curl -X GET http://localhost:8080/api/protected \
-H "Authorization: Bearer $PASTE_TOKEN"
```

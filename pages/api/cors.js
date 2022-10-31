import NextCors from 'nextjs-cors';

async function handler(req, res) {
   await NextCors(req, res, {
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: 'http://127.0.0.1:8090/',
      optionsSuccessStatus: 200,
      credentials: true,
   });

   // Rest of the API logic
   res.json({ message: 'Hello NextJs Cors!' });
}
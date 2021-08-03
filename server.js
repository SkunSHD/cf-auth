const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const router = express.Router();

router.get('/api/test', async (req, res) => {
	console.log('---> req.cookies', req.cookies);
	console.log('req.headers', req.headers);

	res.json({ ok: 123 });
});

app.prepare().then(() => {
	const server = express()

	server.use(router)

	server.get('*', handle)

	server.listen(port, (err) => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})
const PageRoute = require('./PageRoute');
const ItemRoute = require('./ItemRoute');

const mountRoutes = (app) => {
app.use('/api/v1/pages', PageRoute);
app.use('/api/v1/items', ItemRoute);
};

module.exports = mountRoutes;

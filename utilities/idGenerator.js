const random = require('../utilities/random');

const idGenerator = () => {
    const date = new Date();
    const id = date*random()
    return (id.toString())
}

module.exports = idGenerator;
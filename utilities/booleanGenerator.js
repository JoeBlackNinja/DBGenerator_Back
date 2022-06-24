const booleanGenerator = () => {
    if(Math.random() < 0.4){
        return true
    } 
    return false
}

module.exports = booleanGenerator;
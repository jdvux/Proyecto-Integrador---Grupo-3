const mainController = {
    home: (req, res) => {
        res.render('home')
    },

    termsAndConditions: (req, res) => {
        res.render('terms-conditions')
    }
}

module.exports = mainController
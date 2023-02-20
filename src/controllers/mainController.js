const mainController = {
    home: (req, res) => {
        res.render('main/home')
    },

    termsAndConditions: (req, res) => {
        res.render('main/terms-conditions')
    }
}

module.exports = mainController
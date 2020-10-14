const apiTest = (req, res, next) => {
    res.status(200).json({
        body: 'This is a Server API Test'
    });
};

module.exports.apiTest = apiTest;
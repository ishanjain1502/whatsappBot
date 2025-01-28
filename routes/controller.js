const service = require('./service');

exports.replyMessage = async (req, res) => {
  try {

    /**
     * Some processing required here on input,
     * wasnt able to proceed with this due to some admin issue on twilio end with my card.
     */

    const response = await service.analyzeImage(req, res);
    return response;
  }  catch (error) {
    console.error('Error in controller:', error);
    res.status(500).send({
      error: 'Internal server error',
      issue:error
    });
  }
}

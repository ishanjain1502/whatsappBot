# WhatsApp Bot

## Purpose
The WhatsApp bot is designed to analyze incoming images and reply with the contents of the product present in the image. 

## Tech Stack
- **Node.js**
- **Gemini Generative AI**
- **Twilio** (for automating the bot)
- **whatsapp-web** (for automating WhatsApp replies from a personal account)

---

## Methodology

### For Self Account
- **Library**: Used the `whatsapp-web` library to link a personal WhatsApp account.
- **Message Handling**: The library is used to read incoming messages, specifically images, and respond with the product's details.
- **Image Processing**: Images are sent to Gemini's API for parsing and generating appropriate responses based on the content of the product in the image.

### For Hosted Bot
- **Twilio**: Leveraged Twilio's service to create a hosted WhatsApp bot account.
- **Input Handling**: The bot is configured to accept images as input.
- **AI Integration**: A separate service is hosted for interacting with Gemini's generative AI, which processes the images and sends back appropriate replies.

---

## Why Twilio?
- **Prior Experience**: Familiarity with Twilio's platform from previous projects involving email automation.
- **Ease of Setup**: Unlike Meta's native support, Twilio does not require a verified business account, making it quicker to set up and start the bot.

---

## Key Features
1. **Image Recognition**: Automatically identifies the product and extracts its content from the image.
2. **Two Deployment Modes**:
   - Personal Account Integration
   - Hosted Bot using Twilio
3. **Seamless Communication**: Ensures real-time responses to incoming messages on WhatsApp.

---

## Installation & Setup

### Prerequisites
- Node.js installed on your machine
- Twilio account for hosted bot
- Gemini API access
- `whatsapp-web` library installed

### Steps
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd whatsapp-bot
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:
   - Add Gemini API Key
   - Add Twilio credentials (for hosted bot setup)
   - Add WhatsApp-web configuration for self-account integration
   
   Example `.env` file:
   ```
   GEMINI_API_KEY=your_gemini_api_key
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   ```
4. **Run the Bot**:
   ```bash
   npm start
   ```

---

## Usage
- **Self Account**: Connect your WhatsApp account using `whatsapp-web`.
- **Hosted Bot**: Deploy the Twilio bot and start interacting via WhatsApp.

Send an image of a product to the bot, and it will reply with the contents present in the product.

---

## Future Enhancements
- Add support for multi-language product descriptions.
- Enhance image recognition accuracy by experimenting with other generative AI models.
- Explore Meta's native WhatsApp API for a more robust solution once a verified business account is available.
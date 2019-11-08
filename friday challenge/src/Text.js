'use strict';
function Text(){
  var twilio = require('twilio');
  var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Your Account SID from www.twilio.com/console
  var authToken = 'your_auth_token';   // Your Auth Token from www.twilio.com/console

  var twilio = require('twilio');
  var client = new twilio(accountSid, authToken);
};

Text.prototype.send = function(){
  client.messages.create({
      body: 'Hello from Twilio',
      to: '+447931585288',  // Text this number
      from: '+447931585288' // From a valid Twilio number
  });
  .then((message) => console.log(message.sid));
  return 'sent'
};

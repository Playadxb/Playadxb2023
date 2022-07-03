const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST);

exports.handler = function(event, context, callback) {
  let email = event.queryStringParameters.email
  let number = event.queryStringParameters.number
  let date = event.queryStringParameters.date
  let name = event.queryStringParameters.name

  client.transmissions
    .send({
      content: {
        from: 'reservations@playadxb.com',
        subject: 'Contact form',
        html:
          `<html><body><ul>New Contact form:
          <li>Name: ${name}</li>
          <li>Date: ${date}</li>
          <li>email: ${email}</li>
          <li>Phone Number:${number}</li>
          </ul></body></html>`
      },
    recipients: [{ address: 'wael.m.safa@gmail.com' }]
  }).then(data => {
    console.log('Woohoo! You just sent your first mailing!')
    console.log(data)
  })
  .catch(err => {
    console.log('Whoops! Something went wrong')
    console.log(err)
  })
}
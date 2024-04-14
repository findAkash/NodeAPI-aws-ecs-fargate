module.exports = {
  app: {
    name: 'EPITA Ecommerce',
    apiURL: `${process.env.BASE_API_URL}` || 'api',
    clientURL:
      process.env.CLIENT_URL ||
      'http://localhost:8080' ||
      'https://alb-1487273720.eu-west-3.elb.amazonaws.com/',
  },
  port: process.env.PORT || 3000,
  database: {
    url:
      process.env.MONGO_URI ||
      'mongodb+srv://findakash:text1234567890@cluster0.grpw3tv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  },
  jwt: {
    secret: process.env.JWT_SECRET || '213131',
    tokenLife: '7d',
  },
  mailchimp: {
    key: process.env.MAILCHIMP_KEY || 'mailchimp-key',
    listKey: process.env.MAILCHIMP_LIST_KEY || 'mailchimp-list-key',
  },
  mailgun: {
    key: process.env.MAILGUN_KEY || 'mailgun-key',
    domain: process.env.MAILGUN_DOMAIN || 'mailgun-domain',
    sender: process.env.MAILGUN_EMAIL_SENDER || 'mailgun-email-sender',
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID || 'google-client-id',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'google-client-secret',
    callbackURL: process.env.GOOGLE_CALLBACK_URL || 'google-callback-url',
  },
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID || 'facebook-client-id',
    clientSecret:
      process.env.FACEBOOK_CLIENT_SECRET || 'facebook-client-secret',
    callbackURL: process.env.FACEBOOK_CALLBACK_URL || 'facebook-callback-url',
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'aws-access-key-id',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'aws-secret',
    region: process.env.AWS_REGION || 'aws-region',
    bucketName: process.env.AWS_BUCKET_NAME || 'aws-bucket-name',
  },
};

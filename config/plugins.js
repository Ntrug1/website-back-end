module.exports = ({ env }) => {

  if (env('NODE_ENV') === 'production') {
    return {
      upload: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY-ID'),
          secretAccessKey: env('AWS_ACCESS-SECRET'),
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET')
          }
        }
      }
    }
  }

  return {
    
  } 
}
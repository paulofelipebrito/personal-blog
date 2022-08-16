const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env: {
        mongodb_username: 'paulofelipebrito',
        mongodb_password: 'copa2014',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog-dev',
      }
    }
  }
  return {
    env: {
      mongodb_username: 'paulofelipebrito',
      mongodb_password: 'copa2014',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blog',
    }
  }
};


let config = require('../config')

let createLog = (data)=>{
    if(process.env.EXECUTION_MODE == "prod" || config.EXECUTION_MODE == "prod"){
        return true;
    }else{
        console.log(data)
        return true;
    }
}

const statusCode = {
    SUCCESS: 200,
    INTERNAL: 500,
    SOME_ERROR_OCCURRED: 500,
    PARAM_MISSING: 1001,
    EMAIL_MISSING: 1002,
    MOBILE_MISSING: 1003,
    AUTH_ERR: 401,
    EMAIL_EXISTS: 1004,
    PHONE_EXISTS: 1004,
    NAME_EXISTS: 1004,
}

function generateRandomNumber() {
    const min = 100000; 
    const max = 999999; 
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getExpiryTime = (currentTime) => {
    // Calculate time three minutes from now
    const futureTime = new Date(currentTime.getTime() + 3 * 60000);
  
    // Format the time as "Y-m-d H:i:s"
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const currentFormattedTime = currentTime.toLocaleString('en-US', options);
    const futureFormattedTime = futureTime.toLocaleString('en-US', options).replace(',', '');
    return futureFormattedTime;
  };

  const formatDate = (getDate) => {
    const date = new Date(getDate);

    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate
  }
  
  


module.exports = {
	createLog:createLog,
    statusCode: statusCode,
    generateRandomNumber : generateRandomNumber,
    getExpiryTime : getExpiryTime,
    formatDate : formatDate,
}
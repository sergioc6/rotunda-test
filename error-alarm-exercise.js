let errorCount = 0;
let lastNotificationTime = null;


const logError = (error) => {
    appendErrorLogFile(error);

    // Check iif it's been more than a minute
    const currentTime = new Date();
    if(!lastNotificationTime || (currentTime - lastNotificationTime) > (60 * 1000)) {
        errorCount = 1;
        lastNotificationTime = currentTime;
    } else {
        errorCount++;
    }

    // If error count is grather than 10, send email notification
    if (errorCount > 10) {
        sendEmailNotification();
        errorCount = 0;
        lastNotificationTime = currentTime;
    }
}


const appendErrorLogFile = (error) => {
    console.log("Error logged:", error);
    // Logic to append error to log file
}


const sendEmailNotification = () => {
    console.log('Sending email notificatin....');
    // Logic to send email
}

// TESTING CASES
logError('Example error 1');
logError('Example error 2');
for (let i = 0; i < 9; i++) {
    logError(`Example error ${i + 3}`);
}
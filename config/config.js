var fs = require('fs');

var configs = {
    'CONFIGS_OVERWRITE_FILE'                : 'configs_overwrite.js',
    'SECRET'						        : '' ,
    'MONGO_HOST' 					        : ['127.0.0.1'] ,
    'MONGO_PORT' 					        : '27017' ,
    'MONGO_USER'                            : '',
    'MONGO_PASSWORD'                        : '',
    'DB_NAME'		 				        : 'nutaan',
    'REDIS_HOST'                            : '127.0.0.1',
    'REDIS_PORT'                            : 6379,
    'TIME_ZONE'                             : 'Asia/Calcutta',
    'TOKEN_EXPIRE_TIME'                     : 84600 ,
    'OTP_EXPIRE_TIME'                       : 300 ,
    'GOOGLE_AUTH'                           : {},
    'SESSION'                               : {},
    'AWS_ACCESS_KEY'                        : '',
    'AWS_SECRET_KEY'					    : '',
    'AWS_BUCKET'						    : '',
    'AWS_REGION'                            : '',
    // 'FRONTEND_URL'                          : 'https://swaex.com',
    // 'DEFAULT_PIC'                           : 'https://swaex.com/default/user.svg',
    // 'LIFETIME_DATE'                         : '2200-12-31',
    // 'ORDER_ID_RANDOM_NUMBER_LENGTH'         : 2,
};

var overwriteConfigFulFileName = __dirname + '/' + configs.CONFIGS_OVERWRITE_FILE;

if (fs.existsSync(overwriteConfigFulFileName)) {
    var overwriteConfig = require(overwriteConfigFulFileName);
    for (var key in overwriteConfig) {
        configs[key] = overwriteConfig[key];
    }
} else {
    console.log('[[[[[[[ No Overwrite Configs File Found to overwrite any config key ]]]]]]]]');
}

module.exports = configs;
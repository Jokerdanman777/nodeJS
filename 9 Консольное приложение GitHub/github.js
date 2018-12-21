const https = require('https');

function getRepos(username, done){
    if(!username) return done(new Error('Enter username'));
    const options = {
        hostname: 'api.github.com',
        path: `/users/${username}/repos`,
        headers: { 'User-Agent': 'Jokerdanman777' }
    };
    const req = https.get(options, res => {
        res.setEncoding('utf-8');
        if(res.statusCode === 200){
            let body = '';

            res.on('data', data => body += data);
            res.on('end', () => {
                try {
                    let result = JSON.parse(`body`);
                    done(null, result);
                } catch (error) {
                    done(new Error(`Failed parse data (${error.message})`))
                }
            });
        } else {
            done(new Error(`Cant get data from server (${res.statusCode} ${res.statusMessage})`));
        }

    });

    req.on('error', error => done(new Error(`Failed request: (${error.messages})`)));
}

module.exports = {
    getRepos
}
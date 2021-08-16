import config from  '../conf/config'

function request(url,method = 'get') {
    return  fetch(`${config.baseUrl}${url}?token=${config.token}`,{method: method})
        .then(res => res.json())
}

export {request}
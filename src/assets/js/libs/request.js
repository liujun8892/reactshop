import config from  '../conf/config'
import ReactDom from 'react-dom'

let loadEl = ReactDom.findDOMNode(document.getElementById('page-load'))

function request(url,method = 'get') {
    showLoading()
    return  fetch(`${config.baseUrl}${url}?token=${config.token}`,{method: method})
        .then(res => {
            hideLoading()
           return  res.json()
        })
}

function showLoading() {
    loadEl.style.display = 'block'
}

function hideLoading() {
    loadEl.style.display = 'none'
}

export {request}
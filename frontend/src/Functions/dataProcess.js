import url from '../env.js'

async function dataProcess(path,extra){
    var response = await fetch(url.nodeapipath+path,extra)
    var result = await response.json()
    return result
}

export default dataProcess      
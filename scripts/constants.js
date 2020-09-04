const SERVICE_NAME = 'saucelabs/sauce-connect'
const SERVICE_HOST = '0.0.0.0'
const SERVICE_PORT = '22'
const SERVICE_HOME = `/srv/${SERVICE_NAME}`
const DIST_IMAGES = {
    '4.6.2': {
        version: '4.6.2',
        from: 'ubuntu:18.04'
    },
    '4.6.2-alpine-glibc': {
        version: '4.6.2',
        from: 'frolvlad/alpine-glibc'
    }
}
const BUILD_ARGS = { SERVICE_NAME, SERVICE_HOST, SERVICE_PORT, SERVICE_HOME }

module.exports = {
    SERVICE_NAME,
    SERVICE_HOST,
    SERVICE_PORT,
    SERVICE_HOME,
    DIST_IMAGES,
    BUILD_ARGS
}
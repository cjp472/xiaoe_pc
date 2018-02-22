export default function (context) {
    let userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent;
    context.is_mobile = userAgent.indexOf('Android') > 0;
}
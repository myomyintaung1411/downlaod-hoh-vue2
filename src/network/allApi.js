import instance from './index.js'

export default {
    Register(data){
        return instance({
            url: '/users/register',
            method: 'post',
            data,
            requestBase: '/api',
        })
    },
    OptCode(data){
        return instance({
            url: '/users/reg_otp',
            method: 'post',
            data,
            requestBase: '/api',
        })
    },
    DownLoadApp(data){
        return instance({
            url: '/users/get_downlink',
            method: 'get',
            data,
            requestBase: '/api',
        })
    },
    Get_SvgCode(data){
        return instance({
            url: '/users/get_phoes',
            method: 'post',
            data,
            requestBase: '/api',
        })
    },
}
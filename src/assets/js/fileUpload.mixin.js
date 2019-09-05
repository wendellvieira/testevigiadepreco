import {serverUrl} from 'boot/axios'

export default {
    methods: {
        UploadFileMixin( file ){
            return new Promise( (resolve, reject) => {

                const _FORM = new FormData;
                _FORM.append( 'file', file )

                const _XHR = new XMLHttpRequest;

                _XHR.open('POST', `${serverUrl}/file`, true)

                _XHR.onload = response => {
                    resolve(response)
                }

                _XHR.onerror = err => {
                    reject(err)
                }

                _XHR.send(_FORM);

            })
        }
    }
};
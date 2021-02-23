const requestImageSize = require('request-image-size');


const Helper = {
    CheckUrlImage: async (url) => {
        try {
            let img = await requestImageSize(url);
            console.log(img);
            if(img.type == 'png' || img.type == 'jpg' || img.type == 'gif'){
                return true
            }else{
                return false
            }
        } catch (error) {

            return false
        }
    }
}


module.exports = Helper;
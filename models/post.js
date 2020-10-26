const mongoose = require('mongoose')

const postEditionsSchema = new mongoose.Schema({
    photo:{
        type:String,
        required:true
        
    },
    edition:{
        type:String,
        required:true
    },
    editionLink:{
        type:String,
        required:true
    }
})

const postSlidesSchema = new mongoose.Schema({
    dkSlideImage :{
        type:String,
        required:true
    },
    slideTitle:{
        type:String,
        required:true
    },
    slideLink:{
        type:String,
        required:true
    },

})

const postMbSlidesSchema = new mongoose.Schema({
    mbSlideImage :{
        type:String,
        required:true
    },
    mbSlideTitle:{
        type:String,
        required:true
    },
    mbSlideLink:{
        type:String,
        required:true
    }
})


mongoose.model("PostSlides",postSlidesSchema)
mongoose.model("PostMbSlides",postMbSlidesSchema)
mongoose.model("PostEditions",postEditionsSchema)
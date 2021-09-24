"use strict";
class Pixabay {
    constructor(id, pageURL, type, tags, previewURL, previewWidth, previewHeight,webformatURL,largeImageURL,views,downloads,collections,likes,
        comments,user_id,user,userImageURL,imageURL) {
        this.id = id;
        this.pageURL = pageURL;
        this.type = type;
        this.tags = tags;
        this.previewURL = previewURL;
        this.previewWidth = previewWidth;
        this.previewHeight = previewHeight;     
        this.webformatURL = webformatURL;
        this.largeImageURL = largeImageURL;
        this.views = views;
        this.downloads = downloads;
        this.collections = collections;
        this.likes = likes;
        this.comments = comments; 
        this.user_id = user_id;
        this.user = user;
        this.userImageURL = userImageURL;
        this.imageURL = imageURL;
    }
}
module.exports = Pixabay;
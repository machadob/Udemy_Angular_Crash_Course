import { Likes } from "./likes";

function onClick(){
    let likes = new Likes(7)
    console.log(likes.getnoOfLikes())
}

onClick()
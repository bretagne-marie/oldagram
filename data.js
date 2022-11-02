import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const postContent = [
    {
        name: "Dorothea Tanning",
        username: "istaytanning",
        location: "Manhatten, NYC",
        avatar: "images/avatar-dorothea.jpg",
        post: "images/post-dorothea.jpg",
        comment: "casual look for a casual monday, nbd",
        isLiked: false,
        likes: 15202,
        uuid: uuidv4()
    },
    {
        name: "Frida Kahlo",
        username: "fridomfighter",
        location: "Coyoacán, Ciudad de México, México",
        avatar: "images/avatar-frida.jpg",
        post: "images/post-frida.webp",
        comment: "double trouble",
        isLiked: false,
        likes: 22502,
        uuid: uuidv4()
    },
        {
        name: "Élisabeth Vigée Le Brun",
        username: "madamevigee",
        location: "Paris, France",
        avatar: "images/avatar-vigee.jpg",
        post: "images/post-vigee.jpg",
        comment: "new hat, who dis?",
        isLiked: false,
        likes: 10137,
        uuid: uuidv4()
    }
]
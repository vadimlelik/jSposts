import { Component } from "../component";
import { apiService } from "../services/api.service";
import { TransformService } from "../services/transform.services";

export class PostsComponents extends Component {
    constructor(id) {
        super(id);
    }

    async onShow() {
        const fBdata = await apiService.fetchPosts()
        const posts = await TransformService.fbObjectToArray(fBdata)
        console.log(posts);
    }
}
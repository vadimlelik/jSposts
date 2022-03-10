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
        const html = posts.map((post) => renderPosts(post))
        this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
    }
    onHide() {
        this.$el.innerHTML = ' '
    }
}



function renderPosts(post) {
    const tag = post.type === 'news' ?
        `<li class="tag tag-blue tag-rounded">Новости</li>` :
        ` <li class="tag tag-rounded">Заметка</li>`

    return `
        <div class="panel ">
          <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
              ${tag}
            </ul>
          </div>
          <div class="panel-body">
            <p class="multi-line">${post.fulltext}</p>
          </div>
          <div class="panel-footer w-panel-footer">
            <small>${post.date}</small>
          </div>
    </div>`

}
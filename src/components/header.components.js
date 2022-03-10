import {Component} from "../component";

export class HeaderComponents extends Component {
    constructor(id) {
        super(id);

    }

    init() {
        if (localStorage.getItem('visited')) {
            this.hide()
        }
        const btn = this.$el.querySelector('.js-header-start')
        btn.addEventListener('click', buttonHandler.bind(this))

    }

}

function buttonHandler() {
    localStorage.setItem('visited', JSON.stringify(true))
    this.hide()
}

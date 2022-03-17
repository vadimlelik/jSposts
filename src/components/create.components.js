import { Component } from "../component";
import { Form } from "../../form";
import { Validators } from "../validators";
import { apiService } from "../services/api.service";


export class CreateComponents extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))
        this.form = new Form(this.$el, {
            title: [Validators.required], fulltext: [Validators.required, Validators.minLength(10)]
        })

    }
}

async function submitHandler(event) {
    event.preventDefault()

    if (this.form.isValid()) {
        const formData = {
            date: new Date().toLocaleString(),
            type: this.$el.type.value,
            ...this.form.values()
        }

        await apiService.creatPosts(formData)

        this.form.clear()
        alert('Запись создана в базе данных ')

    }


}